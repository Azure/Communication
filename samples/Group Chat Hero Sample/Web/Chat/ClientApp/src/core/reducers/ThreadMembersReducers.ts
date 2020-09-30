import { ChatThreadMember } from '@azure/communication-chat';

import {
  SET_THREAD_MEMBERS,
  SET_THREAD_MEMBERS_ERROR,
  SET_REMOVE_THREAD_MEMBER_ERROR,
  ThreadMembersActionTypes,
  SET_ADD_THREAD_MEMBER_ERROR
} from '../actions/ThreadMembersAction';

export interface ThreadMembersState {
  threadMembers: ChatThreadMember[];
  error?: boolean;
  removeThreadMemberError?: boolean;
  addThreadMemberError?: boolean | undefined;
}

const initState: ThreadMembersState = {
  threadMembers: [],
  error: false,
  removeThreadMemberError: false,
  addThreadMemberError: undefined
};

export const ThreadMembersReducer = (state = initState, action: ThreadMembersActionTypes) => {
  switch (action.type) {
    case SET_THREAD_MEMBERS:
      return {
        ...state,
        threadMembers: [...action.threadMembers]
      };
    case SET_THREAD_MEMBERS_ERROR:
      return {
        ...state,
        error: true
      };
    case SET_REMOVE_THREAD_MEMBER_ERROR:
      return {
        ...state,
        removeThreadMemberError: action.removeThreadMemberError
      };
    case SET_ADD_THREAD_MEMBER_ERROR:
      return {
        ...state,
        addThreadMemberError: action.addThreadMemberError
      };
    default:
      return state;
  }
};
