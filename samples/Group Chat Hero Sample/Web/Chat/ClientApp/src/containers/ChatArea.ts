import { connect } from 'react-redux';

import ChatArea from '../components/ChatArea';
import { State } from '../core/reducers/index';
import { updateTypingUsers } from '../core/sideEffects';

const mapStateToProps = (state: State) => ({
  typingNotifications: state.chat.typingNotifications
});

const mapDispatchToProps = (dispatch: any) => ({
  onUpdateTypingUsers: () => dispatch(updateTypingUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
