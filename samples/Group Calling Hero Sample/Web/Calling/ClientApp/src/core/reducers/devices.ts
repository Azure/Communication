import { Reducer } from 'redux';
import { AudioDeviceInfo, VideoDeviceInfo, DeviceManager } from '@azure/communication-calling';
import {
  SET_DEVICE_MANAGER,
  SET_AUDIO_DEVICE_INFO,
  SET_AUDIO_DEVICE_LIST,
  SET_CAMERA_PERMISSION,
  SET_MICROPHONE_PERMISSION,
  SET_VIDEO_DEVICE_INFO,
  SET_VIDEO_DEVICE_LIST,
  DeviceTypes
} from '../actions/devices';

export interface DevicesState {
  deviceManager?: DeviceManager;
  audioDeviceInfo?: AudioDeviceInfo;
  videoDeviceInfo?: VideoDeviceInfo;
  audioDeviceList: AudioDeviceInfo[];
  videoDeviceList: VideoDeviceInfo[];
  cameraPermission?: string;
  microphonePermission?: string;
}

const initialState: DevicesState = {
  deviceManager: undefined,
  audioDeviceInfo: undefined,
  videoDeviceInfo: undefined,
  audioDeviceList: [],
  videoDeviceList: [],
  cameraPermission: undefined,
  microphonePermission: undefined
};

export const devicesReducer: Reducer<DevicesState, DeviceTypes> = (
  state = initialState,
  action: DeviceTypes
): DevicesState => {
  switch (action.type) {
    case SET_DEVICE_MANAGER:
      return { ...state, deviceManager: action.deviceManager };
    case SET_VIDEO_DEVICE_INFO:
      return { ...state, videoDeviceInfo: action.videoDeviceInfo };
    case SET_AUDIO_DEVICE_INFO:
      return { ...state, audioDeviceInfo: action.audioDeviceInfo };
    case SET_VIDEO_DEVICE_LIST:
      return { ...state, videoDeviceList: action.videoDeviceList };
    case SET_AUDIO_DEVICE_LIST:
      return { ...state, audioDeviceList: action.audioDeviceList };
    case SET_CAMERA_PERMISSION:
      return { ...state, cameraPermission: action.cameraPermission };
    case SET_MICROPHONE_PERMISSION:
      return { ...state, microphonePermission: action.microphonePermission };
    default:
      return state;
  }
};
