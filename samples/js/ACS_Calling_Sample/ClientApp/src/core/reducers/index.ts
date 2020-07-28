import { RemoteVideoStream } from '@skype/spool-sdk';
import { combineReducers, Reducer } from 'redux';
import { devicesReducer, DevicesState } from '../reducers/devices';
import { streamsReducer, StreamsState } from './streams';
import { controlsReducer, ControlsState } from './controls';
import { SdkState, sdkReducer } from './sdk';
import { CallsState, callsReducer } from './calls';

export interface ParticipantStream {
  userId: string;
  stream: RemoteVideoStream | undefined;
}

export interface State {
  calls: CallsState;
  devices: DevicesState;
  streams: StreamsState;
  controls: ControlsState;
  sdk: SdkState;
}

export const reducer: Reducer<State> = combineReducers({
  calls: callsReducer,
  devices: devicesReducer,
  streams: streamsReducer,
  controls: controlsReducer,
  sdk: sdkReducer
});
