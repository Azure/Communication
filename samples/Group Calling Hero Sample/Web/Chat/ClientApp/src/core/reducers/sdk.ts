import { Reducer } from 'redux';
import { SET_USERID, SdkTypes } from '../actions/sdk';

export interface SdkState {
  userId?: string;
}

export const sdkReducer: Reducer<SdkState, SdkTypes> = (state = {}, action: SdkTypes): SdkState => {
  switch (action.type) {
    case SET_USERID:
      return { ...state, userId: action.userId };
    default:
      return state;
  }
};
