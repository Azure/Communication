// © Microsoft Corporation. All rights reserved.
import React, { useEffect } from 'react';
import { Separator, Pivot, PivotItem, Stack } from '@fluentui/react';
import { Call, LocalVideoStream, VideoDeviceInfo } from '@azure/communication-calling';
import MediaControls from './MediaControls';
import { CommandPanelTypes } from './CommandPanel';
import { UserFriendsIcon, SettingsIcon } from '@fluentui/react-icons-northstar';
import {
  headerContainer,
  pivotItemStyles,
  separatorContainerStyle,
  separatorStyles,
  pivotItemStyle,
  headerCenteredContainer
} from './styles/Header.styles';
import { ParticipantStream } from 'core/reducers';

export interface HeaderProps {
  selectedPane: CommandPanelTypes;
  setSelectedPane: any;
  endCallHandler(): void;
  actionable: boolean;
  localVideo: boolean;
  mic: boolean;
  shareScreen: boolean;
  call: Call;
  endCall(): void;
  screenShareStreams: ParticipantStream[];
  activeScreenShareStream: ParticipantStream | undefined;
  localVideoRendererIsBusy: boolean;
  cameraPermission: string;
  microphonePermission: string;
  screenWidth: number;
  setMic(mic: boolean): void;
  setLocalVideoStream(localVideoStream: LocalVideoStream | undefined): void;
  setScreenShare(screenShare: boolean): void;
  isLocalScreenShareSupportedInBrowser(): boolean;
  localVideoStream: LocalVideoStream | undefined;
  videoDeviceInfo: VideoDeviceInfo | undefined;
}

export default (props: HeaderProps): JSX.Element => {
  const togglePeople = (selectedPane: string, setSelectedPane: (pane: string) => void) => {
    return selectedPane !== CommandPanelTypes.People
      ? setSelectedPane(CommandPanelTypes.People)
      : setSelectedPane(CommandPanelTypes.None);
  };

  const toggleOptions = (selectedPane: string, setSelectedPane: (pane: string) => void) => {
    return selectedPane !== CommandPanelTypes.Settings
      ? setSelectedPane(CommandPanelTypes.Settings)
      : setSelectedPane(CommandPanelTypes.None);
  };

  const handleLocalVideoOnOff = () => {
    if (props.localVideoStream) {
      props.call.stopVideo(props.localVideoStream);
      props.setLocalVideoStream(undefined);
    } else {
      if (props.videoDeviceInfo) {
        var localVideoStream = new LocalVideoStream(props.videoDeviceInfo);
        props.setLocalVideoStream(localVideoStream);
        props.call.startVideo(localVideoStream);
      }
    }
  };

  const handleMuteOnOff = () => {
    props.setMic(!props.mic);
  };

  const handleScreenSharingOnOff = () => {
    props.setScreenShare(!props.shareScreen);
  };

  useEffect(() => {
    if (props.call && props.call.localVideoStreams.length === 0 && props.localVideoStream) {
      props.call.startVideo(props.localVideoStream);
    }
  }, [props.call, props.localVideoStream]);

  return (
    <Stack id="header" className={props.screenWidth > 360 ? headerContainer : headerCenteredContainer}>
      <Pivot
        onKeyDownCapture={(e) => {
          if ((e.target as HTMLElement).id === CommandPanelTypes.People && e.keyCode === 39) e.preventDefault();
        }}
        getTabId={(itemKey: string) => itemKey}
        onLinkClick={(item) => {
          if (!item) return;
          if (item.props.itemKey === CommandPanelTypes.Settings)
            toggleOptions(props.selectedPane, props.setSelectedPane);
          if (item.props.itemKey === CommandPanelTypes.People) togglePeople(props.selectedPane, props.setSelectedPane);
        }}
        styles={pivotItemStyles}
        initialSelectedKey={CommandPanelTypes.None}
        selectedKey={props.selectedPane}
      >
        <PivotItem
          itemKey={CommandPanelTypes.Settings}
          onRenderItemLink={() => (
            <SettingsIcon
              outline={props.selectedPane === CommandPanelTypes.Settings ? false : true}
              size="medium"
              className={pivotItemStyle}
            />
          )}
        />
        <PivotItem
          itemKey={CommandPanelTypes.People}
          onRenderItemLink={() => (
            <UserFriendsIcon
              outline={props.selectedPane === CommandPanelTypes.People ? false : true}
              size="medium"
              className={pivotItemStyle}
            />
          )}
        />
        <PivotItem itemKey={CommandPanelTypes.None} />
      </Pivot>
      {props.screenWidth > 360 && (
        <div className={separatorContainerStyle}>
          <Separator styles={separatorStyles} vertical={true} />
        </div>
      )}
      <MediaControls
        micActive={props.mic}
        onMicChange={handleMuteOnOff}
        cameraActive={props.localVideoStream !== undefined}
        onCameraChange={handleLocalVideoOnOff}
        screenShareActive={props.shareScreen}
        activeScreenShareStream={props.screenShareStreams[0] ?? undefined}
        onScreenShareChange={handleScreenSharingOnOff}
        onEndCallClick={() => {
          if (props.localVideo) handleLocalVideoOnOff();
          props.endCall();
        }}
        cameraPermission={props.cameraPermission}
        microphonePermission={props.microphonePermission}
        localVideoRendererIsBusy={props.localVideoRendererIsBusy}
        compressedMode={props.screenWidth <= 360}
        isLocalScreenShareSupportedInBrowser={props.isLocalScreenShareSupportedInBrowser}
      />
    </Stack>
  );
};
