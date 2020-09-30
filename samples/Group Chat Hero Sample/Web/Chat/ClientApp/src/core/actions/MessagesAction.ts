import { ChatMessageWithClientMessageId } from '../reducers/MessagesReducer';

export const SET_MESSAGES = 'SET_MESSAGES';
export const SET_TYPING_NOTIFICATIONS = 'SET_TYPING_NOTIFICATIONS';
export const SET_TYPING_USERS = 'SET_TYPING_USERS';
export const SET_FAILED_MESSAGES = 'SET_FAILED_MESSAGES';

export interface SetMessagesAction {
  type: typeof SET_MESSAGES;
  messages: ChatMessageWithClientMessageId[];
}

export interface SetTypingNotificationsAction {
  type: typeof SET_TYPING_NOTIFICATIONS;
  id: string;
  typingNotification: any;
}

export interface SetTypingUsersAction {
  type: typeof SET_TYPING_USERS;
  typingUsers: any;
}

export interface SetFailedMessagesAction {
  type: typeof SET_FAILED_MESSAGES;
  failedMessages: any;
}

export const setMessages = (messages: ChatMessageWithClientMessageId[]): SetMessagesAction => ({
  type: SET_MESSAGES,
  messages
});

export const setTypingNotifications = (id: string, typingNotification: any): SetTypingNotificationsAction => ({
  type: SET_TYPING_NOTIFICATIONS,
  id,
  typingNotification
});

export const setTypingUsers = (typingUsers: any): SetTypingUsersAction => ({
  type: SET_TYPING_USERS,
  typingUsers
});

export const setFailedMessages = (failedMessages: any): SetFailedMessagesAction => ({
  type: SET_FAILED_MESSAGES,
  failedMessages
});

export type MessagesActionTypes =
  | SetMessagesAction
  | SetTypingNotificationsAction
  | SetTypingUsersAction
  | SetFailedMessagesAction;
