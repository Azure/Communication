import { Reducer } from 'redux';
import { LocalVideoStream } from '@azure/communication-calling';
import { ParticipantStream } from './index';
import {
  SET_LOCAL_VIDEO_STREAM,
  ADD_SCREENSHARE_STREAM,
  RESET_STREAMS,
  StreamTypes,
  REMOVE_SCREENSHARE_STREAM
} from '../actions/streams';
import { DeviceTypes, SET_VIDEO_DEVICE_INFO } from '../actions/devices';

export interface StreamsState {
  streams: ParticipantStream[];
  screenShareStreams: ParticipantStream[];
  localVideoRendererIsBusy: boolean;
  localVideoStream?: LocalVideoStream;
}

const initialState: StreamsState = {
  localVideoRendererIsBusy: false,
  localVideoStream: undefined,
  streams: [],
  screenShareStreams: []
};

export const streamsReducer: Reducer<StreamsState, StreamTypes | DeviceTypes> = (
  state = initialState,
  action: StreamTypes | DeviceTypes
): StreamsState => {
  switch (action.type) {
    case SET_VIDEO_DEVICE_INFO:
      if (state.localVideoStream && action.videoDeviceInfo) {
        return { ...state, localVideoStream: new LocalVideoStream(action.videoDeviceInfo) };
      }
      return state;
    case SET_LOCAL_VIDEO_STREAM:
      return { ...state, localVideoStream: action.localVideoStream };
    case ADD_SCREENSHARE_STREAM:
      const newScreenShareStream: ParticipantStream = { stream: action.stream, user: action.user };
      return { ...state, screenShareStreams: [...state.screenShareStreams, newScreenShareStream] };
    case REMOVE_SCREENSHARE_STREAM:
      const screenShareStreams = state.screenShareStreams.filter(
        (stream) => stream.stream !== action.stream && stream.user !== action.user
      );
      return { ...state, screenShareStreams };
    case RESET_STREAMS:
      return initialState;
    default:
      return state;
  }
};
