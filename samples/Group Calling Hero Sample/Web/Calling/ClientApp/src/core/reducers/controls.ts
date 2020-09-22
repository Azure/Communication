import { Reducer } from 'redux';
import { SET_MIC, SET_SHARE_SCREEN, RESET_CONTROLS, ControlTypes } from '../actions/controls';

export interface ControlsState {
  mic: boolean;
  localVideo: boolean;
  shareScreen: boolean;
}

const initialState: ControlsState = {
  mic: false,
  localVideo: false,
  shareScreen: false
};

export const controlsReducer: Reducer<ControlsState, ControlTypes> = (
  state = initialState,
  action: ControlTypes
): ControlsState => {
  switch (action.type) {
    case SET_MIC:
      return { ...state, mic: action.mic };
    case SET_SHARE_SCREEN:
      return { ...state, shareScreen: action.shareScreen };
    case RESET_CONTROLS:
      return initialState;
    default:
      return state;
  }
};
