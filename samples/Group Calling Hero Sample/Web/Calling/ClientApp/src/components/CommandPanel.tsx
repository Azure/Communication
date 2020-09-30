import React from 'react';
import NewLocalSettings from './LocalSettings';
import ParticipantStack from '../containers/ParticipantStack';
import { VideoDeviceInfo, AudioDeviceInfo } from '@azure/communication-calling';
import { Stack } from '@fluentui/react';
import {
  fullHeightStyles,
  paneHeaderStyle,
  settingsContainerStyle,
  paneHeaderTextStyle
} from './styles/CommandPanel.styles';
import Footer from './Footer';

export interface CommandPanelProps {
  selectedPane: string;
  videoDeviceInfo: VideoDeviceInfo;
  videoDeviceList: VideoDeviceInfo[];
  audioDeviceList: AudioDeviceInfo[];
  audioDeviceInfo: AudioDeviceInfo;
  setSelectedPane: any;
  setVideoDeviceInfo(device: VideoDeviceInfo): void;
  setAudioDeviceInfo(device: AudioDeviceInfo): void;
}
export enum CommandPanelTypes {
  None = 'none',
  People = 'People',
  Settings = 'Settings'
}

export default (props: CommandPanelProps): JSX.Element => {

  return (
    <Stack styles={fullHeightStyles}>
      <Stack.Item className={paneHeaderStyle}>
        <div className={paneHeaderTextStyle}>{props.selectedPane}</div>
      </Stack.Item>
      
        {props.selectedPane === CommandPanelTypes.People && (
          <Stack.Item styles={fullHeightStyles}>
            <ParticipantStack />
          </Stack.Item>
        )}
        {props.selectedPane === CommandPanelTypes.People && (
          <Stack.Item>
            <Footer />
          </Stack.Item>
        )}
        {props.selectedPane === CommandPanelTypes.Settings && (
          <Stack.Item>
          <div className={settingsContainerStyle}>
            <NewLocalSettings
              videoDeviceList={props.videoDeviceList}
              audioDeviceList={props.audioDeviceList}
              audioDeviceInfo={props.audioDeviceInfo}
              videoDeviceInfo={props.videoDeviceInfo}
              setVideoDeviceInfo={props.setVideoDeviceInfo}
              setAudioDeviceInfo={props.setAudioDeviceInfo}
            />
          </div>
          </Stack.Item>
        )}
      
    </Stack>
  );
};
