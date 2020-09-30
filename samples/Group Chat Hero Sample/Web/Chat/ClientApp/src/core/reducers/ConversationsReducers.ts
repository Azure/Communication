import { ReadReceipt } from '@azure/communication-chat';

import { SET_RECEIPTS, ConversationsActionTypes } from '../actions/ConversationsAction';

export interface ConversationsState {
  receipts: ReadReceipt[];
}

const initConversationsState: ConversationsState = {
  receipts: []
};

export const ConversationsReducer = (state = initConversationsState, action: ConversationsActionTypes) => {
  switch (action.type) {
    case SET_RECEIPTS:
      return {
        ...state,
        receipts: [...action.receipts]
      };
    default:
      return state;
  }
};
