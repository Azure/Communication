import { LocalVideoStream, PreviewRenderer, RemoteVideoStream } from '@skype/spool-sdk';

const SET_LOCAL_PREVIEW_STATUS_CHANGE = 'SET_LOCAL_PREVIEW_STATUS_CHANGE';
const SET_LOCAL_PREVIEW_RENDERER = 'SET_LOCAL_PREVIEW_RENDERER';
const SET_LOCAL_VIDEO_STREAM = 'SET_LOCAL_STREAM';
const ADD_STREAM = 'ADD_STREAM';
const REMOVE_STREAM = 'REMOVE_STREAM';
const ADD_SCREENSHARE_STREAM = 'ADD_SCREENSHARE_STREAM';
const SET_ACTIVE_SCREENSHARE_STREAM = 'SET_ACTIVE_SCREENSHARE_STREAM';
const RESET_STREAMS = 'RESET_STREAMS';

interface SetLocalVideoRendererIsBusyAction {
  type: typeof SET_LOCAL_PREVIEW_STATUS_CHANGE;
  localVideoRendererIsBusy: boolean;
}

interface SetLocalPreviewRendererAction {
  type: typeof SET_LOCAL_PREVIEW_RENDERER;
  localPreviewRenderer: PreviewRenderer | undefined;
}

interface SetLocalStreamAction {
  type: typeof SET_LOCAL_VIDEO_STREAM;
  localVideoStream: LocalVideoStream | undefined;
}

interface AddStreamAction {
  type: typeof ADD_STREAM;
  stream: RemoteVideoStream;
  userId: string;
}

interface RemoveStreamAction {
  type: typeof REMOVE_STREAM;
  stream: RemoteVideoStream;
  userId: string;
}

interface AddScreenShareStreamAction {
  type: typeof ADD_SCREENSHARE_STREAM;
  stream: RemoteVideoStream;
  userId: string;
}

interface SetActiveScreenShareStreamAction {
  type: typeof SET_ACTIVE_SCREENSHARE_STREAM;
  stream: RemoteVideoStream | undefined;
  userId: string | undefined;
}

interface ResetStreamsAction {
  type: typeof RESET_STREAMS;
}

export const setLocalVideoRendererIsBusyAction = (
  localVideoRendererIsBusy: boolean
): SetLocalVideoRendererIsBusyAction => {
  return {
    type: SET_LOCAL_PREVIEW_STATUS_CHANGE,
    localVideoRendererIsBusy
  };
};

export const setLocalPreviewRenderer = (
  localPreviewRenderer: PreviewRenderer | undefined
): SetLocalPreviewRendererAction => {
  return {
    type: SET_LOCAL_PREVIEW_RENDERER,
    localPreviewRenderer
  };
};

export const setLocalVideoStream = (localVideoStream: LocalVideoStream | undefined): SetLocalStreamAction => {
  return {
    type: SET_LOCAL_VIDEO_STREAM,
    localVideoStream
  };
};

export const addStream = (stream: RemoteVideoStream, userId: string): AddStreamAction => {
  return {
    type: ADD_STREAM,
    stream,
    userId
  };
};

export const removeStream = (stream: RemoteVideoStream, userId: string): RemoveStreamAction => {
  return {
    type: REMOVE_STREAM,
    stream,
    userId
  };
};

export const addScreenShareStream = (stream: RemoteVideoStream, userId: string): AddScreenShareStreamAction => {
  return {
    type: ADD_SCREENSHARE_STREAM,
    stream,
    userId
  };
};

export const activateScreenShareStreamAction = (
  stream: RemoteVideoStream,
  userId: string
): SetActiveScreenShareStreamAction => {
  return {
    type: SET_ACTIVE_SCREENSHARE_STREAM,
    stream,
    userId
  };
};

export const deactivateScreenShareStreamAction = (): SetActiveScreenShareStreamAction => {
  return {
    type: SET_ACTIVE_SCREENSHARE_STREAM,
    stream: undefined,
    userId: undefined
  };
};

export const resetStreams = (): ResetStreamsAction => {
  return {
    type: RESET_STREAMS
  };
};

export {
  SET_LOCAL_PREVIEW_STATUS_CHANGE,
  SET_LOCAL_PREVIEW_RENDERER,
  SET_LOCAL_VIDEO_STREAM,
  ADD_STREAM,
  REMOVE_STREAM,
  ADD_SCREENSHARE_STREAM,
  SET_ACTIVE_SCREENSHARE_STREAM,
  RESET_STREAMS
};

export type StreamTypes =
  | SetLocalVideoRendererIsBusyAction
  | SetLocalPreviewRendererAction
  | SetLocalStreamAction
  | AddStreamAction
  | RemoveStreamAction
  | AddScreenShareStreamAction
  | SetActiveScreenShareStreamAction
  | ResetStreamsAction;
