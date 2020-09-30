import { ChatClient } from '@azure/communication-chat';

export const SET_CHAT_CLIENT = 'SET_CHAT_CLIENT';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const SET_CURRENT_USER_COOL_PERIOD = 'SET_CURRENT_USER_COOL_PERIOD';
export const SET_USERS = 'SET_USERS';

export interface SetChatClientAction {
  type: typeof SET_CHAT_CLIENT;
  chatClient: ChatClient;
}

export interface SetContosoUserAction {
  type: typeof SET_CURRENT_USER;
  identity: string;
  token: string;
  displayName: string;
  memberRole?: string;
}

export interface SetContosoUserCoolPeriodAction {
  type: typeof SET_CURRENT_USER_COOL_PERIOD;
  coolPeriod: Date;
}

export interface SetContosoUsersAction {
  type: typeof SET_USERS;
  users: any;
}

export const setChatClient = (chatClient: ChatClient): SetChatClientAction => ({
  type: SET_CHAT_CLIENT,
  chatClient
});

export const setContosoUser = (identity: string, token: string, displayName: string): SetContosoUserAction => ({
  type: SET_CURRENT_USER,
  identity,
  token,
  displayName
});

export const setContosoUserCoolPeriod = (coolPeriod: Date): SetContosoUserCoolPeriodAction => ({
  type: SET_CURRENT_USER_COOL_PERIOD,
  coolPeriod
});

export const setContosoUsers = (users: any): SetContosoUsersAction => ({
  type: SET_USERS,
  users
});

export type ContosoActionTypes =
  | SetChatClientAction
  | SetContosoUserAction
  | SetContosoUserCoolPeriodAction
  | SetContosoUsersAction;
