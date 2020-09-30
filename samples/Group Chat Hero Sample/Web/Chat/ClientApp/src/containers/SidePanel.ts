import { connect } from 'react-redux';

import { GUID_FOR_INITIAL_TOPIC_NAME } from '../../src/constants';
import { setContosoUsers } from '../core/actions/ContosoClientAction';
import { setThreadMembers, setRemoveThreadMemberError } from '../core/actions/ThreadMembersAction';
import SidePanel from '../components/SidePanel';
import { State } from '../core/reducers/index';
import React from 'react';
import { updateThreadTopicName, removeThreadMemberByUserId } from '../core/sideEffects';

const mapStateToProps = (state: State) => ({
  identity: state.contosoClient.user.identity,
  threadMembers: state.threadMembers.threadMembers,
  users: state.contosoClient.users,
  thread: state.thread.thread,
  existsTopicName: state.thread.thread && state.thread.thread.topic !== GUID_FOR_INITIAL_TOPIC_NAME,
  removeThreadMemberError: state.threadMembers.removeThreadMemberError!
});

const mapDispatchToProps = (dispatch: any) => ({
  clearThreadMembers: dispatch(setThreadMembers([])),
  setContosoUsers: (users: any) => setContosoUsers(users),
  updateThreadTopicName: (topicName: string, setIsSavingTopicName: React.Dispatch<boolean>) => {
    dispatch(updateThreadTopicName(topicName, setIsSavingTopicName));
  },
  removeThreadMemberByUserId: async (userId: string) => {
    dispatch(removeThreadMemberByUserId(userId));
  },
  setRemoveThreadMemberError: async (removeError: boolean) => {
    dispatch(setRemoveThreadMemberError(removeError));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel);
