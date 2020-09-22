import { AudioDeviceInfo, VideoDeviceInfo, DeviceManager } from '@azure/communication-calling';

const SET_DEVICE_MANAGER = 'SET_DEVICE_MANAGER';
const SET_AUDIO_DEVICE_INFO = 'SET_AUDIO_DEVICE_INFO';
const SET_VIDEO_DEVICE_INFO = 'SET_VIDEO_DEVICE_INFO';
const SET_AUDIO_DEVICE_LIST = 'SET_AUDIO_DEVICE_LIST';
const SET_VIDEO_DEVICE_LIST = 'SET_VIDEO_DEVICE_LIST';
const SET_MICROPHONE_PERMISSION = 'SET_MICROPHONE_PERMISSION';
const SET_CAMERA_PERMISSION = 'SET_CAMERA_PERMISSION';

interface SetDeviceManagerAction {
  type: typeof SET_DEVICE_MANAGER;
  deviceManager: DeviceManager;
}

interface SetMicrophonePermission {
  type: typeof SET_MICROPHONE_PERMISSION;
  microphonePermission: string;
}

interface SetCameraPermission {
  type: typeof SET_CAMERA_PERMISSION;
  cameraPermission: string;
}

interface SetAudioDeviceAction {
  type: typeof SET_AUDIO_DEVICE_INFO;
  audioDeviceInfo: AudioDeviceInfo | undefined;
}

interface SetVideoDeviceAction {
  type: typeof SET_VIDEO_DEVICE_INFO;
  videoDeviceInfo: VideoDeviceInfo | undefined;
}

interface SetAudioDeviceListAction {
  type: typeof SET_AUDIO_DEVICE_LIST;
  audioDeviceList: AudioDeviceInfo[];
}

interface SetVideoDeviceListAction {
  type: typeof SET_VIDEO_DEVICE_LIST;
  videoDeviceList: VideoDeviceInfo[];
}

export const setDeviceManager = (deviceManager: DeviceManager): SetDeviceManagerAction => {
  return {
    type: SET_DEVICE_MANAGER,
    deviceManager
  };
};

export const setMicrophonePermission = (microphonePermission: string): SetMicrophonePermission => {
  return {
    type: SET_MICROPHONE_PERMISSION,
    microphonePermission
  };
};

export const setCameraPermission = (cameraPermission: string): SetCameraPermission => {
  return {
    type: SET_CAMERA_PERMISSION,
    cameraPermission
  };
};

export const setAudioDeviceInfo = (audioDeviceInfo: AudioDeviceInfo | undefined): SetAudioDeviceAction => {
  return {
    type: SET_AUDIO_DEVICE_INFO,
    audioDeviceInfo
  };
};

export const setVideoDeviceInfo = (videoDeviceInfo: VideoDeviceInfo | undefined): SetVideoDeviceAction => {
  return {
    type: SET_VIDEO_DEVICE_INFO,
    videoDeviceInfo
  };
};

export const setAudioDeviceList = (audioDeviceList: AudioDeviceInfo[]): SetAudioDeviceListAction => {
  return {
    type: SET_AUDIO_DEVICE_LIST,
    audioDeviceList
  };
};

export const setVideoDeviceList = (videoDeviceList: VideoDeviceInfo[]): SetVideoDeviceListAction => {
  return {
    type: SET_VIDEO_DEVICE_LIST,
    videoDeviceList
  };
};
export {
  SET_DEVICE_MANAGER,
  SET_AUDIO_DEVICE_INFO,
  SET_VIDEO_DEVICE_INFO,
  SET_VIDEO_DEVICE_LIST,
  SET_AUDIO_DEVICE_LIST,
  SET_CAMERA_PERMISSION,
  SET_MICROPHONE_PERMISSION
};

export type DeviceTypes =
  | SetDeviceManagerAction
  | SetAudioDeviceAction
  | SetVideoDeviceAction
  | SetMicrophonePermission
  | SetCameraPermission
  | SetAudioDeviceListAction
  | SetVideoDeviceListAction;
