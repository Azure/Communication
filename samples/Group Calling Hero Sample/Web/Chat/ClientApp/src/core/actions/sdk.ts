const SET_USERID = 'SET_USERID';

interface SetUserIdAction {
  type: typeof SET_USERID;
  userId: string;
}

export const setUserId = (userId: string): SetUserIdAction => {
  return {
    type: SET_USERID,
    userId
  };
};

export { SET_USERID };

export type SdkTypes = SetUserIdAction;
