import { ChatThreadMember } from '@azure/communication-chat';

export const SET_THREAD_MEMBERS = 'SET_THREAD_MEMBERS';
export const SET_THREAD_MEMBERS_ERROR = 'SET_THREAD_MEMBERS_ERROR';
export const SET_REMOVE_THREAD_MEMBER_ERROR = 'SET_REMOVE_THREAD_MEMBER_ERROR';
export const SET_ADD_THREAD_MEMBER_ERROR = 'SET_ADD_THREAD_MEMBER_ERROR';

export interface SetThreadMembersAction {
  type: typeof SET_THREAD_MEMBERS;
  threadMembers: ChatThreadMember[];
}

export interface SetThreadMembersErrorAction {
  type: typeof SET_THREAD_MEMBERS_ERROR;
  error?: boolean;
}

export interface SetRemoveThreadMemberErrorAction {
  type: typeof SET_REMOVE_THREAD_MEMBER_ERROR;
  removeThreadMemberError?: boolean;
}
export interface SetAddThreadMemberErrorAction {
  type: typeof SET_ADD_THREAD_MEMBER_ERROR;
  addThreadMemberError?: boolean;
}

export const setThreadMembers = (threadMembers: ChatThreadMember[]): SetThreadMembersAction => ({
  type: SET_THREAD_MEMBERS,
  threadMembers
});

export const setThreadMembersError = (error: boolean): SetThreadMembersErrorAction => ({
  type: SET_THREAD_MEMBERS_ERROR,
  error
});

export const setRemoveThreadMemberError = (removeThreadMemberError: boolean): SetRemoveThreadMemberErrorAction => ({
  type: SET_REMOVE_THREAD_MEMBER_ERROR,
  removeThreadMemberError
});

export const setAddThreadMemberError = (addThreadMemberError: boolean | undefined): SetAddThreadMemberErrorAction => ({
  type: SET_ADD_THREAD_MEMBER_ERROR,
  addThreadMemberError
});

export type ThreadMembersActionTypes =
  | SetThreadMembersAction
  | SetThreadMembersErrorAction
  | SetRemoveThreadMemberErrorAction
  | SetAddThreadMemberErrorAction;
