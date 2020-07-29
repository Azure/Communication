import { connect } from 'react-redux';
import { removeParticipant } from '../core/sideEffects';
import { State } from '../core/reducers';
import ParticipantStack from '../components/ParticipantStack';

const mapStateToProps = (state: State) => ({
  userId: state.sdk.userId,
  call: state.calls.call,
  callState: state.calls.callState,
  remoteParticipants: state.calls.remoteParticipants,
  activeScreenShareStream: state.streams.activeScreenShareStream,
  removeParticipant: (userId: string) => {
    if (state.calls.call) removeParticipant(state.calls.call, userId);
  }
});

const connector: any = connect(mapStateToProps);
export default connector(ParticipantStack);
