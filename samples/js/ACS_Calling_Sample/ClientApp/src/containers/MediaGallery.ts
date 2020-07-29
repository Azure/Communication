import { connect } from 'react-redux';
import MediaGallery from '../components/MediaGallery';
import { setCamera, startLocalPreview, endLocalPreview } from '../core/sideEffects';
import { Constants } from '../core/constants';
import { State } from '../core/reducers';
import { CallClient, PreviewRenderer, VideoDeviceInfo, LocalVideoStream } from '@skype/spool-sdk';

const mapStateToProps = (state: State) => ({
  userId: state.sdk.userId,
  streams: state.streams.streams,
  remoteParticipants: state.calls.remoteParticipants,
  localVideo: state.controls.localVideo,
  callClient: state.sdk.callClient,
  localVideoRendererIsBusy: state.streams.localVideoRendererIsBusy,
  localPreviewRenderer: state.streams.localPreviewRenderer,
  localVideoStream: state.streams.localVideoStream,
  videoDeviceInfo: state.devices.videoDeviceInfo
});

const mapDispatchToProps = (dispatch: any) => ({
  setLocalVideo: (
    video: boolean,
    callClient: CallClient,
    previewRenderer: PreviewRenderer,
    videoDeviceInfo: VideoDeviceInfo,
    localVideoStream: LocalVideoStream,
    localVideoRendererIsBusy: boolean
  ) => {
    dispatch(setCamera(videoDeviceInfo, localVideoStream));
    if (video) {
      dispatch(
        startLocalPreview(callClient, videoDeviceInfo, Constants.LOCAL_VIDEO_PREVIEW_ID, localVideoRendererIsBusy)
      );
    } else {
      dispatch(endLocalPreview(previewRenderer, localVideoRendererIsBusy));
    }
  }
});

const connector: any = connect(mapStateToProps, mapDispatchToProps);
export default connector(MediaGallery);
