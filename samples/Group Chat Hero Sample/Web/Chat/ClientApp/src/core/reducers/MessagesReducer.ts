import { ChatMessage } from '@azure/communication-chat';

import {
  MessagesActionTypes,
  SET_MESSAGES,
  SET_TYPING_NOTIFICATIONS,
  SET_TYPING_USERS,
  SET_FAILED_MESSAGES
} from '../actions/MessagesAction';

export interface ChatMessageWithClientMessageId extends ChatMessage {
  clientMessageId?: string;
}

export interface MessagesState {
  messages: ChatMessageWithClientMessageId[];
  typingNotifications: any;
  typingUsers: any;
  failedMessages: string[];
}

const initMessagesState: MessagesState = {
  messages: [],
  typingNotifications: {},
  typingUsers: [],
  failedMessages: []
};

export const MessagesReducer = (state = initMessagesState, action: MessagesActionTypes) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: [...action.messages]
      };
    case SET_TYPING_NOTIFICATIONS:
      return {
        ...state,
        typingNotifications: {
          ...state.typingNotifications,
          [action.id]: action.typingNotification
        }
      };
    case SET_TYPING_USERS:
      return {
        ...state,
        typingUsers: [...action.typingUsers]
      };
    case SET_FAILED_MESSAGES:
      return {
        ...state,
        failedMessages: [...action.failedMessages]
      };
    default:
      return state;
  }
};
