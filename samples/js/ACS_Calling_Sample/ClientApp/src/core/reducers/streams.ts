import { Reducer } from 'redux';
import { LocalVideoStream, PreviewRenderer } from '@skype/spool-sdk';
import { ParticipantStream } from './index';
import {
  SET_LOCAL_PREVIEW_STATUS_CHANGE,
  SET_LOCAL_PREVIEW_RENDERER,
  SET_LOCAL_VIDEO_STREAM,
  ADD_STREAM,
  REMOVE_STREAM,
  ADD_SCREENSHARE_STREAM,
  SET_ACTIVE_SCREENSHARE_STREAM,
  RESET_STREAMS,
  StreamTypes
} from '../actions/streams';

export interface StreamsState {
  streams: ParticipantStream[];
  screenShareStreams: ParticipantStream[];
  localPreviewRenderer?: PreviewRenderer;
  activeScreenShareStream?: ParticipantStream;
  localVideoRendererIsBusy: boolean;
  localVideoStream?: LocalVideoStream;
}

const initialState: StreamsState = {
  localVideoRendererIsBusy: false,
  localPreviewRenderer: undefined,
  localVideoStream: undefined,
  streams: [],
  screenShareStreams: [],
  activeScreenShareStream: undefined
};

export const streamsReducer: Reducer<StreamsState, StreamTypes> = (
  state = initialState,
  action: StreamTypes
): StreamsState => {
  switch (action.type) {
    case SET_LOCAL_PREVIEW_STATUS_CHANGE:
      return { ...state, localVideoRendererIsBusy: action.localVideoRendererIsBusy };
    case SET_LOCAL_PREVIEW_RENDERER:
      return { ...state, localPreviewRenderer: action.localPreviewRenderer };
    case SET_LOCAL_VIDEO_STREAM:
      return { ...state, localVideoStream: action.localVideoStream };
    case ADD_STREAM:
      const newStream = { stream: action.stream, userId: action.userId };
      return { ...state, streams: [...state.streams, newStream] };
    case REMOVE_STREAM:
      const streams = state.streams.filter(
        (stream) => stream.stream !== action.stream && stream.userId !== action.userId
      );
      return { ...state, streams };
    case ADD_SCREENSHARE_STREAM:
      const newScreenShareStream = { stream: action.stream, userId: action.userId };
      return { ...state, screenShareStreams: [...state.screenShareStreams, newScreenShareStream] };
    case SET_ACTIVE_SCREENSHARE_STREAM:
      const activeScreenShareStream =
        action.stream && action.userId ? { stream: action.stream, userId: action.userId } : undefined;
      return { ...state, activeScreenShareStream };
    case RESET_STREAMS:
      return initialState;
    default:
      return state;
  }
};
