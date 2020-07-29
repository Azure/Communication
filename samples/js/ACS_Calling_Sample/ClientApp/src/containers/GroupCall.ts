import { connect } from 'react-redux';
import GroupCall, { GroupCallProps } from '../components/GroupCall';
import { joinGroup, setMicrophone, setCameraDevice } from '../core/sideEffects';
import { setVideoDeviceInfo, setAudioDeviceInfo } from '../core/actions/devices';
import { AudioDeviceInfo, VideoDeviceInfo, CallClient } from '@skype/spool-sdk';
import { State } from '../core/reducers';

const mapStateToProps = (state: State, props: GroupCallProps) => ({
  userId: state.sdk.userId || props.userId,
  group: state.calls.group,
  screenWidth: props.screenWidth,
  call: state.calls.call,
  mic: state.controls.mic,
  callClient: state.sdk.callClient,
  groupCallEndReason: state.calls.groupCallEndReason,
  isGroup: () => state.calls.call && !state.calls.call.isIncoming && !!state.calls.group,
  joinGroup: () => {
    state.sdk.callClient &&
      joinGroup(
        state.sdk.callClient,
        {
          groupId: state.calls.group
        },
        {
          audioOptions: { muted: !state.controls.mic }
        }
      );
  },
  remoteParticipants: state.calls.remoteParticipants,
  streams: state.streams.streams,
  callState: state.calls.callState,
  localVideo: state.controls.localVideo,
  previewRenderer: state.streams.localPreviewRenderer,
  localVideoStream: state.streams.localVideoStream,
  activeScreenShareStream: state.streams.activeScreenShareStream,
  videoDeviceInfo: state.devices.videoDeviceInfo,
  audioDeviceInfo: state.devices.audioDeviceInfo,
  videoDeviceList: state.devices.videoDeviceList,
  audioDeviceList: state.devices.audioDeviceList,
  cameraPermission: state.devices.cameraPermission,
  microphonePermission: state.devices.microphonePermission
});

const mapDispatchToProps = (dispatch: any) => ({
  mute: () => dispatch(setMicrophone(false)),
  setAudioDeviceInfo: (deviceInfo: AudioDeviceInfo) => dispatch(setAudioDeviceInfo(deviceInfo)),
  setVideoDeviceInfo: (callClient: CallClient, deviceInfo: VideoDeviceInfo) => {
    dispatch(setCameraDevice(callClient, deviceInfo));
    dispatch(setVideoDeviceInfo(deviceInfo));
  }
});

const connector: any = connect(mapStateToProps, mapDispatchToProps);
export default connector(GroupCall);
