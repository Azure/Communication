import { LocalVideoStream, RemoteParticipant, RemoteVideoStream } from '@azure/communication-calling';

const SET_LOCAL_PREVIEW_RENDERER = 'SET_LOCAL_PREVIEW_RENDERER';
const SET_LOCAL_VIDEO_STREAM = 'SET_LOCAL_STREAM';
const ADD_STREAM = 'ADD_STREAM';
const REMOVE_STREAM = 'REMOVE_STREAM';
const ADD_SCREENSHARE_STREAM = 'ADD_SCREENSHARE_STREAM';
const REMOVE_SCREENSHARE_STREAM = 'REMOVE_SCREENSHARE_STREAM';
const RESET_STREAMS = 'RESET_STREAMS';

interface SetLocalStreamAction {
  type: typeof SET_LOCAL_VIDEO_STREAM;
  localVideoStream: LocalVideoStream | undefined;
}

interface AddScreenShareStreamAction {
  type: typeof ADD_SCREENSHARE_STREAM;
  stream: RemoteVideoStream;
  user: RemoteParticipant;
}

interface RemoveScreenShareStreamAction {
  type: typeof REMOVE_SCREENSHARE_STREAM;
  stream: RemoteVideoStream;
  user: RemoteParticipant;
}

interface ResetStreamsAction {
  type: typeof RESET_STREAMS;
}

export const setLocalVideoStream = (localVideoStream: LocalVideoStream | undefined): SetLocalStreamAction => {
  return {
    type: SET_LOCAL_VIDEO_STREAM,
    localVideoStream
  };
};

export const addScreenShareStream = (
  stream: RemoteVideoStream,
  user: RemoteParticipant
): AddScreenShareStreamAction => {
  return {
    type: ADD_SCREENSHARE_STREAM,
    stream,
    user
  };
};

export const removeScreenShareStream = (
  stream: RemoteVideoStream,
  user: RemoteParticipant
): RemoveScreenShareStreamAction => {
  return {
    type: REMOVE_SCREENSHARE_STREAM,
    stream,
    user
  };
};

export const resetStreams = (): ResetStreamsAction => {
  return {
    type: RESET_STREAMS
  };
};

export {
  SET_LOCAL_PREVIEW_RENDERER,
  SET_LOCAL_VIDEO_STREAM,
  ADD_STREAM,
  REMOVE_STREAM,
  ADD_SCREENSHARE_STREAM,
  REMOVE_SCREENSHARE_STREAM,
  RESET_STREAMS
};

export type StreamTypes =
  | SetLocalStreamAction
  | AddScreenShareStreamAction
  | RemoveScreenShareStreamAction
  | ResetStreamsAction;
