import { combineReducers, Reducer } from 'redux';

import { ContosoActionTypes } from '../actions/ContosoClientAction';
import { ConversationsActionTypes } from '../actions/ConversationsAction';
import { MessagesActionTypes } from '../actions/MessagesAction';
import { ThreadActionTypes } from '../actions/ThreadAction';
import { ThreadMembersActionTypes } from '../actions/ThreadMembersAction';
import { ContosoReducer, ContosoState } from './ContosoClientReducers';
import { ConversationsReducer, ConversationsState } from './ConversationsReducers';
import { MessagesReducer, MessagesState } from './MessagesReducer';
import { ThreadReducer, ThreadState } from './ThreadReducers';
import { ThreadMembersReducer, ThreadMembersState } from './ThreadMembersReducers';

export interface State {
  chat: MessagesState;
  contosoClient: ContosoState;
  conversations: ConversationsState;
  thread: ThreadState;
  threadMembers: ThreadMembersState;
}

type TotalActions =
  | MessagesActionTypes
  | ContosoActionTypes
  | ConversationsActionTypes
  | ThreadActionTypes
  | ThreadMembersActionTypes;

export const reducer: Reducer<State, TotalActions> = combineReducers({
  chat: MessagesReducer,
  contosoClient: ContosoReducer,
  conversations: ConversationsReducer,
  thread: ThreadReducer,
  threadMembers: ThreadMembersReducer
});
