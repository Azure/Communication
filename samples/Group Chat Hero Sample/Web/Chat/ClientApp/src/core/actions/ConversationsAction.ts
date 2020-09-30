import { ReadReceipt } from '@azure/communication-chat';

export const SET_RECEIPTS = 'SET_RECEIPTS';

export interface SetReceiptsAction {
  type: typeof SET_RECEIPTS;
  receipts: ReadReceipt[];
}

export const setReceipts = (receipts: ReadReceipt[]): SetReceiptsAction => ({
  type: SET_RECEIPTS,
  receipts
});

export type ConversationsActionTypes = SetReceiptsAction;
