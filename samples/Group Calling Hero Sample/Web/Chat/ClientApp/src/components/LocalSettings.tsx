// © Microsoft Corporation. All rights reserved.
import React from 'react';
import { Stack, Dropdown, IDropdownOption } from '@fluentui/react';
import { VideoDeviceInfo, AudioDeviceInfo } from '@azure/communication-calling';
import { localSettingsContainer, dropDownStyles, micStackTokens, mainStackTokens } from './styles/LocalSettings.styles';

export interface LocalSettingsProps {
  videoDeviceList: VideoDeviceInfo[];
  audioDeviceList: AudioDeviceInfo[];
  videoDeviceInfo: VideoDeviceInfo;
  audioDeviceInfo: AudioDeviceInfo;
  setVideoDeviceInfo(device: VideoDeviceInfo): void;
  setAudioDeviceInfo(device: AudioDeviceInfo): void;
}

export default (props: LocalSettingsProps): JSX.Element => {
  const defaultPlaceHolder = 'Select an option';
  const cameraLabel = 'Camera';
  const micLabel = 'Microphone';

  const getDropDownList = (list: Array<VideoDeviceInfo | AudioDeviceInfo>): IDropdownOption[] => {
    return list.map((item) => ({
      val: item,
      key: item.id,
      text: item.name === '' ? item.deviceType : item.name
    }));
  };
  return (
    <Stack className={localSettingsContainer} tokens={mainStackTokens}>
      <Dropdown
        placeholder={defaultPlaceHolder}
        label={cameraLabel}
        options={getDropDownList(props.videoDeviceList)}
        styles={dropDownStyles}
        disabled={props.videoDeviceList.length === 0}
        defaultSelectedKey={props.videoDeviceInfo ? props.videoDeviceInfo.id : ''}
        onChange={(...args) => {
          const index = args[2] ?? 0;
          props.setVideoDeviceInfo(props.videoDeviceList[index]);
        }}
      />
      <Stack tokens={micStackTokens}>
        <Dropdown
          placeholder={defaultPlaceHolder}
          label={micLabel}
          styles={dropDownStyles}
          disabled={props.audioDeviceList.length === 0}
          options={getDropDownList(props.audioDeviceList)}
          defaultSelectedKey={props.audioDeviceInfo ? props.audioDeviceInfo.id : ''}
          onChange={(...args) => {
            const index = args[2] ?? 0;
            props.setAudioDeviceInfo(props.audioDeviceList[index]);
          }}
        />
      </Stack>
    </Stack>
  );
};
