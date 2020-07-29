import { Reducer } from 'redux';
import { CallClient } from '@skype/spool-sdk';
import { SET_USERID, SET_CALL_CLIENT, SdkTypes } from '../actions/sdk';

export interface SdkState {
  userId?: string;
  callClient?: CallClient;
}

export const sdkReducer: Reducer<SdkState, SdkTypes> = (state = {}, action: SdkTypes): SdkState => {
  switch (action.type) {
    case SET_USERID:
      return { ...state, userId: action.userId };
    case SET_CALL_CLIENT:
      return { ...state, callClient: action.callClient };
    default:
      return state;
  }
};
