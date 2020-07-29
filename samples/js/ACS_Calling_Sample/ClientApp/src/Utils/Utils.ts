// © Microsoft Corporation. All rights reserved.
import { AudioDeviceInfo, VideoDeviceInfo } from '@skype/spool-sdk';

export const utils = {
  getAppServiceUrl: (): string => {
    return window.location.origin;
  },
  getTokenForUser: async (userId: string): Promise<any> => {
    const response = await fetch('/userToken?userId='.concat(encodeURIComponent(userId)));
    if (response.ok) {
      return response.json();
    }
    throw new Error('Invalid token response');
  },
  isSelectedAudioDeviceInList(selected: AudioDeviceInfo, list: AudioDeviceInfo[]): boolean {
    return list.filter((item) => item.name === selected.name).length > 0;
  },
  isSelectedVideoDeviceInList(selected: VideoDeviceInfo, list: VideoDeviceInfo[]): boolean {
    return list.filter((item) => item.name === selected.name).length > 0;
  },
  isMobileSession() {
    return window.navigator.userAgent.match(/(iPad|iPhone|iPod|Android|webOS|BlackBerry|Windows Phone)/g)
      ? true
      : false;
  },
  isSmallScreen() {
    return window.innerWidth < 700 || window.innerHeight < 400;
  }
};
