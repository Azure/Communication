import {
  AudioDeviceInfo,
  Call,
  CallClientOptions,
  CommunicationError,
  GroupCallContext,
  JoinCallOptions,
  DeviceManager,
  DeviceAccess,
  PermissionState,
  RemoteParticipant,
  VideoDeviceInfo,
  CallAgent,
  CallClient,
  HangupCallOptions
} from '@azure/communication-calling';
import { AzureCommunicationUserCredential, CommunicationUser, CallingApplication } from '@azure/communication-common';
import { Dispatch } from 'redux';
import { utils } from '../Utils/Utils';
import { callAdded, callRemoved, setCallState, setParticipants, setCallAgent } from './actions/calls';
import { setMic, setShareScreen, resetControls } from './actions/controls';
import {
  setAudioDeviceInfo,
  setAudioDeviceList,
  setCameraPermission,
  setMicrophonePermission,
  setVideoDeviceInfo,
  setVideoDeviceList,
  setDeviceManager
} from './actions/devices';
import { addScreenShareStream, resetStreams, removeScreenShareStream } from './actions/streams';
import { State } from './reducers';

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

export const updateDevices = () => {
  return async (dispatch: Dispatch, getState: () => State) => {
    let state = getState();
    let deviceManager = state.devices.deviceManager;

    if (deviceManager == null) {
      console.error('no device manager available');
      return;
    }

    const cameraList: VideoDeviceInfo[] = await deviceManager.getCameraList();

    dispatch(setVideoDeviceList(cameraList));

    const microphoneList: AudioDeviceInfo[] = await deviceManager.getMicrophoneList();

    dispatch(setAudioDeviceList(microphoneList));
  };
};

export const initCallClient = (userId: string, unsupportedStateHandler: () => void, endCallHandler: () => void) => {
  return async (dispatch: Dispatch, getState: () => State) => {
    try {
      const tokenResponse = await utils.getTokenForUser(userId);

      const options: CallClientOptions = {};

      const userToken = tokenResponse.value.token;

      var callClient;

      // check if chrome/ios
      if (utils.isOnIphoneAndNotSafari()) {
        unsupportedStateHandler();
        return;
      }

      try {
        callClient = new CallClient(options);
      } catch (e) {
        unsupportedStateHandler();
        return;
      }

      if (!callClient) {
        return;
      }

      const tokenCredential = new AzureCommunicationUserCredential(userToken);
      let callAgent: CallAgent = await callClient.createCallAgent(tokenCredential);

      if (callAgent === undefined) {
        return;
      }

      callAgent.updateDisplayName(userId);

      let deviceManager: DeviceManager = await callClient.getDeviceManager();

      dispatch(setDeviceManager(deviceManager));
      dispatch(setCallAgent(callAgent));

      subscribeToDeviceManager(deviceManager, dispatch, getState);

      callAgent.on('callsUpdated', (e: { added: Call[]; removed: Call[] }): void => {
        e.added.forEach((addedCall) => {
          const state = getState();
          if (state.calls.call && addedCall.isIncoming) {
            addedCall.reject();
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
    } catch (e) {
      console.error(e);
    }
  };
};

// what does the forEveryone parameter really mean?
export const endCall = async (call: Call, options: HangupCallOptions) => {
  call.hangUp(options).catch((e: CommunicationError) => console.error(e));
};

export const joinGroup = async (callAgent: CallAgent, context: GroupCallContext, callOptions: JoinCallOptions) => {
  try {
    await callAgent.join(context, callOptions);
  } catch (e) {
    console.log('Failed to join a call', e);
    return;
  }
};

export const addParticipant = async (call: Call, user: CommunicationUser | CallingApplication) => {
  call.addParticipant(user);
};

export const removeParticipant = async (call: Call, user: CommunicationUser | CallingApplication) => {
  call.removeParticipant(user).catch((e: CommunicationError) => console.error(e));
};

const subscribeToParticipant = (
  participant: RemoteParticipant,
  call: Call,
  dispatch: Dispatch,
  getState: () => State
) => {
  const userId = utils.getId(participant.identifier);
  participant.on('participantStateChanged', () => {
    console.log('participant stateChanged', userId, participant.state);
    dispatch(setParticipants([...call.remoteParticipants.values()]));
  });

  participant.on('isSpeakingChanged', () => {
    dispatch(setParticipants([...call.remoteParticipants.values()]));
  });

  participant.on('videoStreamsUpdated', (e): void => {
    e.added.forEach((addedStream) => {
      if (addedStream.type === 'Video') {
        return;
      }
      addedStream.on('availabilityChanged', () => {
        if (addedStream.isAvailable) {
          dispatch(addScreenShareStream(addedStream, participant));
        } else {
          dispatch(removeScreenShareStream(addedStream, participant));
        }
      });

      if (addedStream.isAvailable) {
        dispatch(addScreenShareStream(addedStream, participant));
      }
    });
  });
};

const updateAudioDevices = async (deviceManager: DeviceManager, dispatch: Dispatch, getState: () => State) => {
  const microphoneList: AudioDeviceInfo[] = await deviceManager.getMicrophoneList();
  dispatch(setAudioDeviceList(microphoneList));

  const state = getState();
  if (state.devices.audioDeviceInfo === undefined && microphoneList.length > 0) {
    dispatch(setAudioDeviceInfo(microphoneList[0]));
    deviceManager.setMicrophone(microphoneList[0]);
  } else if (
    state.devices.audioDeviceInfo &&
    !utils.isSelectedAudioDeviceInList(state.devices.audioDeviceInfo, microphoneList)
  ) {
    deviceManager.setMicrophone(state.devices.audioDeviceInfo);
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
    dispatch(setVideoDeviceInfo(state.devices.videoDeviceInfo));
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

  deviceManager.askDevicePermission(true, true).then((e: DeviceAccess) => {
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
