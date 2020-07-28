import { connect } from 'react-redux';
import PreCall, { PreCallScreenProps } from '../components/PreCall';
import { setGroup } from '../core/actions/calls';
import { setUserId } from '../core/actions/sdk';
import { setVideoDeviceInfo, setAudioDeviceInfo } from '../core/actions/devices';
import {
  initCallClient,
  startLocalPreview,
  endLocalPreview,
  setCameraDevice,
  updateDevices
} from '../core/sideEffects';
import { setLocalVideo, setMic } from '../core/actions/controls';
import { Constants } from '../core/constants';
import { State } from '../core/reducers';
import { AudioDeviceInfo, CallClient, VideoDeviceInfo, PreviewRenderer } from '@skype/spool-sdk';

const mapStateToProps = (state: State, props: PreCallScreenProps) => ({
  userId: state.sdk.userId || props.userId,
  group: state.calls.group,
  mic: state.controls.mic,
  callClient: state.sdk.callClient,
  screenWidth: props.screenWidth,
  localVideoStream: state.streams.localVideoStream,
  localVideoRendererIsBusy: state.streams.localVideoRendererIsBusy,
  previewRenderer: state.streams.localPreviewRenderer,
  audioDeviceInfo: state.devices.audioDeviceInfo,
  videoDeviceInfo: state.devices.videoDeviceInfo,
  videoDeviceList: state.devices.videoDeviceList,
  audioDeviceList: state.devices.audioDeviceList,
  cameraPermission: state.devices.cameraPermission,
  microphonePermission: state.devices.microphonePermission
});

const mapDispatchToProps = (dispatch: any) => ({
  setLocalVideo: (
    videoOn: boolean,
    callClient: CallClient,
    previewRenderer: PreviewRenderer,
    videoDeviceInfo: VideoDeviceInfo,
    localVideoRendererIsBusy: boolean
  ) => {
    dispatch(setLocalVideo(videoOn));
    if (videoOn) {
      dispatch(
        startLocalPreview(
          callClient,
          videoDeviceInfo,
          Constants.PRECALL_LOCAL_VIDEO_PREVIEW_ID,
          localVideoRendererIsBusy
        )
      );
    } else {
      dispatch(endLocalPreview(previewRenderer, localVideoRendererIsBusy));
    }
  },
  setMic: (mic: boolean) => dispatch(setMic(mic)),
  setAudioDeviceInfo: (deviceInfo: AudioDeviceInfo) => dispatch(setAudioDeviceInfo(deviceInfo)),
  setVideoDeviceInfo: (callClient: CallClient, deviceInfo: VideoDeviceInfo) => {
    dispatch(setCameraDevice(callClient, deviceInfo));
    dispatch(setVideoDeviceInfo(deviceInfo));
  },
  initCallClient: (userId: string) => dispatch(initCallClient(userId)),
  setUserId: (userId: string) => dispatch(setUserId(userId)),
  setGroup: (groupId: string) => dispatch(setGroup(groupId)),
  endLocalPreview: (previewRenderer: PreviewRenderer, localVideoRendererIsBusy = false) =>
    dispatch(endLocalPreview(previewRenderer, localVideoRendererIsBusy)),
  updateDevices: (callClient: CallClient) => dispatch(updateDevices(callClient))
});

const connector: any = connect(mapStateToProps, mapDispatchToProps);
export default connector(PreCall);
