import { connect } from 'react-redux';
import MediaGallery from '../components/MediaGallery';
import { State } from '../core/reducers';

const mapStateToProps = (state: State) => ({
  userId: state.sdk.userId,
  remoteParticipants: state.calls.remoteParticipants,
  localVideoStream: state.streams.localVideoStream
});

const connector: any = connect(mapStateToProps);
export default connector(MediaGallery);
