import {
  AcsError,
  AudioDeviceInfo,
  Call,
  CallClient,
  CallClientOptions,
  GroupCallContext,
  CallHangupOptions,
  CallingFactory,
  CallOptions,
  CallRejectOptions,
  DeviceManager,
  IDeviceAccess,
  LocalVideoStream,
  PermissionState,
  PreviewRenderer,
  RemoteParticipant,
  VideoDeviceInfo
} from '@skype/spool-sdk';
import { CommunicationUserCredential } from '@azure/communication-common';
import { Dispatch } from 'redux';
import { utils } from '../Utils/Utils';
import { callAdded, callRemoved, setCallState, setParticipants } from './actions/calls';
import { setLocalVideo, setMic, setShareScreen, resetControls } from './actions/controls';
import {
  setAudioDeviceInfo,
  setAudioDeviceList,
  setCameraPermission,
  setMicrophonePermission,
  setVideoDeviceInfo,
  setVideoDeviceList
} from './actions/devices';
import { setCallClient } from './actions/sdk';
import {
  activateScreenShareStreamAction,
  addScreenShareStream,
  addStream,
  deactivateScreenShareStreamAction,
  removeStream,
  setLocalPreviewRenderer,
  setLocalVideoStream,
  setLocalVideoRendererIsBusyAction,
  resetStreams
} from './actions/streams';
import { State, ParticipantStream } from './reducers';
import { Constants } from './constants';

// we need to set new state to remember the audio/video devices
// we need to also set up the localVideoStream when we want to stop. This could be stopping a screenshare as well?
export const setCamera = (videoDeviceInfo: VideoDeviceInfo, localVideoStream: LocalVideoStream) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const state = getState();
    try {
      if (state.calls.call !== undefined && state.calls.call.state !== Constants.INCOMING) {
        if (state.controls.localVideo && localVideoStream == undefined) {
          const createdLocalVideoStream: LocalVideoStream = await state.calls.call.startVideo(videoDeviceInfo);
          dispatch(setLocalVideoStream(createdLocalVideoStream));
        } else if (!state.controls.localVideo && localVideoStream !== undefined) {
          await state.calls.call.stopVideo(localVideoStream);
          dispatch(setLocalVideoStream(undefined));
        }
      } else {
        console.error('missig call object');
      }
    } catch (e) {
      if (e.message === 'SourceUnavailableError') {
        alert(
          'Your camera is being used by another app! If you close the camera in your other app you can use the camera in this call'
        );
      }
    }
  };
};

export const setLocalVid = (video: boolean) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLocalVideo(video));
  };
};

export const setMicrophone = (mic: boolean) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const state = getState();

    if (state === undefined || state.calls.call === undefined) {
      console.error('state or state.controls.mic is null');
      return;
    }

    try {
      if (!state.controls.mic) {
        await state.calls.call.unmute();
      } else {
        await state.calls.call.mute();
      }

      dispatch(setMic(mic));
    } catch (e) {
      console.error(e);
    }
  };
};

export const setShareUnshareScreen = (shareScreen: boolean) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    const state = getState();

    if (state === undefined || state.calls.call === undefined) {
      console.error('state or state.controls.shareScreen is null');
      return;
    }

    try {
      if (!state.controls.shareScreen) {
        await state.calls.call.startScreenSharing();
      } else {
        await state.calls.call.stopScreenSharing();
      }

      dispatch(setShareScreen(shareScreen));
    } catch (e) {
      console.error(e);
    }
  };
};

export const updateDevices = (callClient: CallClient) => {
  return async (dispatch: Dispatch) => {
    const cameraList: VideoDeviceInfo[] = await callClient.deviceManager.getCameraList();

    dispatch(setVideoDeviceList(cameraList));

    const microphoneList: AudioDeviceInfo[] = await callClient.deviceManager.getMicrophoneList();

    dispatch(setAudioDeviceList(microphoneList));
  };
};

export const initCallClient = (userId: string) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    try {
      const tokenResponse = await utils.getTokenForUser(userId);

      const options: CallClientOptions = {};
      let callClient;
      try {
        callClient = await CallingFactory.create(
          new CommunicationUserCredential(tokenResponse.serviceToken.token),
          options
        );
      } catch (e) {}

      if (callClient === undefined) {
        return;
      }

      subscribeToDeviceManager(callClient.deviceManager, dispatch, getState);

      // set up a/v options
      callClient.on('callsUpdated', (e): void => {
        e.added.forEach((addedCall) => {
          const state = getState();
          if (state.calls.call && addedCall.isIncoming) {
            const rejectOptions: CallRejectOptions = {
              globalDecline: true
            };

            addedCall.reject(rejectOptions);
            return;
          }

          dispatch(callAdded(addedCall));

          addedCall.on('callStateChanged', (): void => {
            dispatch(setCallState(addedCall.state));
          });

          addedCall.on('isScreenSharingOnChanged', (): void => {
            dispatch(setShareScreen(addedCall.isScreenSharingOn));
          });

          addedCall.on('remoteParticipantsUpdated', (ev): void => {
            ev.added.forEach((addedRemoteParticipant) => {
              console.log('participantAdded', addedRemoteParticipant);
              subscribeToParticipant(addedRemoteParticipant, addedCall, dispatch, getState);
              dispatch(setParticipants([...addedCall.remoteParticipants.values()]));
            });

            // we don't use the actual value we are just going to reset the remoteParticipants based on the call
            if (ev.removed.length > 0) {
              console.log('participantRemoved');
              dispatch(setParticipants([...addedCall.remoteParticipants.values()]));
            }
          });

          const rp = [...addedCall.remoteParticipants.values()];
          rp.forEach((v) => subscribeToParticipant(v, addedCall, dispatch, getState));
          dispatch(setParticipants(rp));
          dispatch(setCallState(addedCall.state));
        });
        e.removed.forEach((removedCall) => {
          console.log('callRemoved', removedCall);
          const state = getState();
          if (state.calls.call && state.calls.call === removedCall) {
            dispatch(callRemoved(removedCall, state.calls.group));
            dispatch(resetControls());
            dispatch(resetStreams());
          }
        });
      });

      dispatch(setCallClient(callClient));
    } catch (e) {
      console.error(e);
    }
  };
};

export const acceptCall = async (call: Call, options: CallOptions) => {
  call.accept(options).catch((e: AcsError) => console.error(e));
};

// what does global decline really mean ?
export const rejectCall = async (call: Call, options: CallRejectOptions) => {
  call.reject(options).catch((e: AcsError) => console.error(e));
};

// what does the forEveryone parameter really mean?
export const endCall = async (call: Call, options: CallHangupOptions) => {
  call.hangUp(options).catch((e: AcsError) => console.error(e));
};

export const placeCall = async (callClient: CallClient, callTarget: string, options: CallOptions) => {
  try {
    await callClient.call([callTarget], options);
  } catch (e) {
    console.log('Failed to place a call', e);
  }
};

export const joinGroup = async (callClient: CallClient, context: GroupCallContext, callOptions: CallOptions) => {
  try {
    await callClient.join(context, callOptions);
  } catch (e) {
    console.log('Failed to join a call', e);
    return;
  }
};

export const setCameraDevice = (callClient: CallClient, videoDeviceInfo: VideoDeviceInfo) => {
  return async () => {
    await callClient.deviceManager.setCamera(videoDeviceInfo);
  };
};

export const startLocalPreview = (
  callClient: CallClient,
  videoDeviceInfo: VideoDeviceInfo,
  targetDivId: string,
  localVideoRendererIsBusy: boolean
) => {
  return async (dispatch: Dispatch) => {
    if (!videoDeviceInfo) {
      return;
    }

    if (localVideoRendererIsBusy) {
      return;
    }

    const target = document.getElementById(targetDivId);

    if (!target) {
      console.error('LocalPreview: Target div was not found.');
      return;
    }

    dispatch(setLocalVideoRendererIsBusyAction(true /* in progress */));

    const previewRenderer = callClient.deviceManager.renderPreviewVideo(target, 'Fit');
    await previewRenderer
      .start()
      .then(() => {
        dispatch(setLocalPreviewRenderer(previewRenderer));
        dispatch(setLocalVideoRendererIsBusyAction(false /* done */));
      })
      .catch(() => {
        // in the case that we can't render for whatever reason we want to reset the localPreviewRenderer,
        // the local preview renderer busy status and the local video state
        dispatch(setLocalPreviewRenderer(undefined));
        dispatch(setLocalVideoRendererIsBusyAction(false /* done */));
        dispatch(setLocalVideo(false /* set local video off */));
      });
  };
};

export const endLocalPreview = (localPreviewRenderer: PreviewRenderer, localVideoRendererIsBusy: boolean) => {
  return async (dispatch: Dispatch) => {
    if (localVideoRendererIsBusy) {
      return;
    }

    dispatch(setLocalVideoRendererIsBusyAction(true /* in progress */));

    if (localPreviewRenderer != undefined) {
      localPreviewRenderer.dispose();
    }

    dispatch(setLocalVideoRendererIsBusyAction(false /* in progress */));
    dispatch(setLocalPreviewRenderer(undefined));
  };
};

export const addParticipant = async (call: Call, userId: string) => {
  call.addParticipant(userId);
};

export const removeParticipant = async (call: Call, userId: string) => {
  call.removeParticipant(userId).catch((e: AcsError) => console.error(e));
};

const subscribeToParticipant = (
  participant: RemoteParticipant,
  call: Call,
  dispatch: Dispatch,
  getState: () => State
) => {
  const userId = participant.userId;
  participant.on('participantStateChanged', () => {
    console.log('participant stateChanged', userId, participant.state);
    dispatch(setParticipants([...call.remoteParticipants.values()]));
  });

  participant.on('screenSharingStreamsUpdated', (e): void => {
    const state = getState();
    e.added.forEach((addedScreenShareStream) => {
      dispatch(addScreenShareStream(addedScreenShareStream, userId));
    });
    const screenshareStreams: ParticipantStream[] = state.streams.screenShareStreams;
    const activeScreenShare = screenshareStreams.filter(
      (stream) => stream && stream.stream && stream.stream.isAvailable
    );
    if (activeScreenShare[0] && activeScreenShare[0].stream) {
      dispatch(activateScreenShareStreamAction(activeScreenShare[0].stream, activeScreenShare[0].userId));
    } else {
      dispatch(deactivateScreenShareStreamAction());
    }
  });
  participant.on('videoStreamsUpdated', (e): void => {
    e.added.forEach((addedStream) => {
      addedStream.on('availabilityChanged', () => {
        if (addedStream.isAvailable) {
          dispatch(addStream(addedStream, participant.userId));
        } else {
          dispatch(removeStream(addedStream, participant.userId));
        }
      });

      if (addedStream.isAvailable) {
        dispatch(addStream(addedStream, participant.userId));
      }
    });
    e.removed.forEach((removedStream) => {
      console.log(`removedStream ${removedStream.type} for user ${participant.userId}`);
    });
  });
};

const updateAudioDevices = async (deviceManager: DeviceManager, dispatch: Dispatch, getState: () => State) => {
  const microphoneList: AudioDeviceInfo[] = await deviceManager.getMicrophoneList();
  dispatch(setAudioDeviceList(microphoneList));

  const state = getState();
  if (state.devices.audioDeviceInfo === undefined) {
    dispatch(setAudioDeviceInfo(microphoneList[0]));
  } else if (
    state.devices.audioDeviceInfo &&
    !utils.isSelectedAudioDeviceInList(state.devices.audioDeviceInfo, microphoneList)
  ) {
    dispatch(setAudioDeviceInfo(microphoneList[0]));
  }
};

const updateVideoDevices = async (deviceManager: DeviceManager, dispatch: Dispatch, getState: () => State) => {
  const cameraList: VideoDeviceInfo[] = deviceManager.getCameraList();
  dispatch(setVideoDeviceList(cameraList));

  const state = getState();
  if (state.devices.videoDeviceInfo === undefined) {
    dispatch(setVideoDeviceInfo(cameraList[0]));
  } else if (
    state.devices.videoDeviceInfo &&
    !utils.isSelectedVideoDeviceInList(state.devices.videoDeviceInfo, cameraList)
  ) {
    dispatch(setVideoDeviceInfo(cameraList[0]));
  }
};

const subscribeToDeviceManager = async (deviceManager: DeviceManager, dispatch: Dispatch, getState: () => State) => {
  // listen for any new events
  deviceManager.on('permissionStateChanged', async () => {
    const cameraPermissionState: PermissionState = await deviceManager.getPermissionState('Camera');
    dispatch(setCameraPermission(cameraPermissionState));

    const microphonePermissionState: PermissionState = await deviceManager.getPermissionState('Microphone');
    dispatch(setMicrophonePermission(microphonePermissionState));
  });

  deviceManager.on('videoDevicesUpdated', async () => {
    updateVideoDevices(deviceManager, dispatch, getState);
  });

  deviceManager.on('audioDevicesUpdated', async () => {
    updateAudioDevices(deviceManager, dispatch, getState);
  });

  deviceManager.askDevicePermission(true, true).then((e: IDeviceAccess) => {
    if (e.audio !== undefined) {
      if (e.audio) {
        dispatch(setMicrophonePermission('Granted'));

        updateAudioDevices(deviceManager, dispatch, getState);
      } else {
        dispatch(setMicrophonePermission('Denied'));
      }
    }

    if (e.video !== undefined) {
      if (e.video) {
        dispatch(setCameraPermission('Granted'));
        updateVideoDevices(deviceManager, dispatch, getState);
      } else {
        dispatch(setCameraPermission('Denied'));
      }
    }
  });
};
