import { connect } from 'react-redux';

import ConfigurationScreen from '../components/ConfigurationScreen';
import { addUserToThread, isValidThread } from '../core/sideEffects';
import { State } from '../core/reducers/index';
import { setAddThreadMemberError } from '../core/actions/ThreadMembersAction';

const mapStateToProps = (state: State) => ({
  addThreadMemberError: state.threadMembers.addThreadMemberError!
});

const mapDispatchToProps = (dispatch: any) => ({
  setup: async (displayName: string, emoji: string, goToNextScreen: Function) => {
    await dispatch(addUserToThread(displayName, emoji));
  },
  isValidThread: async (threadId: string) => dispatch(isValidThread(threadId)),
  setAddThreadMemberError: async (addThreadMemberError: boolean | undefined) => {
    dispatch(setAddThreadMemberError(addThreadMemberError));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfigurationScreen);
