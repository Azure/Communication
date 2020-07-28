import { CallClient } from '@skype/spool-sdk';

const SET_USERID = 'SET_USERID';
const SET_CALL_CLIENT = 'SET_CALL_CLIENT';

interface SetUserIdAction {
  type: typeof SET_USERID;
  userId: string;
}

interface SetCallClientAction {
  type: typeof SET_CALL_CLIENT;
  callClient: CallClient;
}
export const setUserId = (userId: string): SetUserIdAction => {
  return {
    type: SET_USERID,
    userId
  };
};

export const setCallClient = (callClient: CallClient): SetCallClientAction => {
  return {
    type: SET_CALL_CLIENT,
    callClient
  };
};

export { SET_USERID, SET_CALL_CLIENT };

export type SdkTypes = SetUserIdAction | SetCallClientAction;
