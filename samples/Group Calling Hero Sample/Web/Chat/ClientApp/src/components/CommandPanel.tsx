import React from 'react';
import NewLocalSettings from './LocalSettings';
import ParticipantStack from '../containers/ParticipantStack';
import { VideoDeviceInfo, AudioDeviceInfo } from '@azure/communication-calling';
import { Stack, Icon, PrimaryButton, TextField, Separator } from '@fluentui/react';
import {
  fullHeightStyles,
  paneFooterStyles,
  paneFooterTokens,
  textFieldStyles,
  paneHeaderStyle,
  footerMainTextStyle,
  copyLinkButtonStyle,
  copyIconStyle,
  settingsContainerStyle,
  paneHeaderTextStyle
} from './styles/CommandPanel.styles';

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

const copyJoinLink = () => {
  const inputElement = document.getElementById('inputText') as HTMLInputElement;
  inputElement.select();
  document.execCommand('copy');
};
export default (props: CommandPanelProps): JSX.Element => {
  const invitePeopleString = 'Invite people to join';
  const copyJoinInfoString = 'Copy join info';

  return (
    <Stack styles={fullHeightStyles}>
      <Stack.Item className={paneHeaderStyle}>
        <div className={paneHeaderTextStyle}>{props.selectedPane}</div>
      </Stack.Item>
      <Stack.Item styles={fullHeightStyles}>
        {props.selectedPane === CommandPanelTypes.People && (
          <Stack verticalAlign="space-between" styles={fullHeightStyles}>
            <ParticipantStack />
            <Stack styles={paneFooterStyles} tokens={paneFooterTokens}>
              <Separator />
              <div className={footerMainTextStyle}>{invitePeopleString}</div>
              <TextField styles={textFieldStyles} id="inputText" type="text" value={`${document.baseURI}`}></TextField>
              <PrimaryButton className={copyLinkButtonStyle} onClick={copyJoinLink}>
                <Icon iconName="Copy" className={copyIconStyle} />
                {copyJoinInfoString}
              </PrimaryButton>
            </Stack>
          </Stack>
        )}
        {props.selectedPane === CommandPanelTypes.Settings && (
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
        )}
      </Stack.Item>
    </Stack>
  );
};
