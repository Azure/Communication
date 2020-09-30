import { connect } from 'react-redux';

import ChatScreen from '../components/ChatScreen';
import { getThread, getThreadMembers, getMessages } from '../core/sideEffects';
import { State } from '../core/reducers';

const mapStateToProps = (state: State) => ({
  threadMembersError: state.threadMembers.error!
});

const mapDispatchToProps = (dispatch: any) => ({
  getThreadMembers: () => dispatch(getThreadMembers()),
  getThread: () => dispatch(getThread()),
  getMessages: () => dispatch(getMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
