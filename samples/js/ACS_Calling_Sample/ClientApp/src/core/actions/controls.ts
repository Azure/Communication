const SET_MIC = 'SET_MIC';
const SET_LOCAL_VIDEO = 'SET_LOCAL_VIDEO';
const SET_SHARE_SCREEN = 'SET_SHARE_SCREEN';
const RESET_CONTROLS = 'RESET_CONTROLS';

interface SetMicAction {
  type: typeof SET_MIC;
  mic: boolean;
}

interface SetLocalVideoAction {
  type: typeof SET_LOCAL_VIDEO;
  localVideo: boolean;
}

interface SetShareScreenAction {
  type: typeof SET_SHARE_SCREEN;
  shareScreen: boolean;
}

interface ResetControlsAction {
  type: typeof RESET_CONTROLS;
}

export const setMic = (mic: boolean): SetMicAction => {
  return {
    type: SET_MIC,
    mic
  };
};

export const setLocalVideo = (localVideo: boolean): SetLocalVideoAction => {
  return {
    type: SET_LOCAL_VIDEO,
    localVideo
  };
};

export const setShareScreen = (shareScreen: boolean): SetShareScreenAction => {
  return {
    type: SET_SHARE_SCREEN,
    shareScreen
  };
};

export const resetControls = (): ResetControlsAction => {
  return {
    type: RESET_CONTROLS
  };
};

export { SET_MIC, SET_LOCAL_VIDEO, SET_SHARE_SCREEN, RESET_CONTROLS };

export type ControlTypes = SetMicAction | SetLocalVideoAction | SetShareScreenAction | ResetControlsAction;
