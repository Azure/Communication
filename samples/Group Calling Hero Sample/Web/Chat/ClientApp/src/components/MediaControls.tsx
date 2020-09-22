import * as React from 'react';
import { Stack, CommandButton } from '@fluentui/react';
import {
  MicIcon,
  MicOffIcon,
  CallVideoIcon,
  CallVideoOffIcon,
  CallEndIcon,
  CallControlPresentNewIcon,
  CallControlCloseTrayIcon
} from '@fluentui/react-icons-northstar';
import {
  controlButtonStyle,
  endCallButtonStyle,
  endCallButtonTextStyle,
  mediaControlStyles,
  fullWidth,
  controlButtonDisabledStyle
} from './styles/MediaControls.styles';
import { ParticipantStream } from 'core/reducers';

export interface MediaControlsProps {
  micActive: boolean;
  screenShareActive: boolean;
  activeScreenShareStream: ParticipantStream | undefined;
  cameraActive: boolean;
  cameraPermission: string;
  microphonePermission: string;
  localVideoRendererIsBusy: boolean;
  compressedMode: boolean;
  onMicChange(): void;
  onCameraChange(): void;
  onScreenShareChange(): void;
  onEndCallClick(): void;
  isLocalScreenShareSupportedInBrowser(): boolean;
}

export default (props: MediaControlsProps): JSX.Element => {
  const cameraActive = props.cameraPermission === 'Denied' ? false : props.cameraActive;
  const cameraDisabled = props.cameraPermission === 'Denied';
  const cameraOnClick = props.cameraPermission !== 'Denied' ? props.onCameraChange : undefined;
  const micActive = props.microphonePermission === 'Denied' ? false : props.micActive;
  const micDisabled = props.microphonePermission === 'Denied';
  const micOnClick = props.microphonePermission !== 'Denied' ? props.onMicChange : undefined;
  const screenShareDisabled = !!props.activeScreenShareStream;

  return (
    <Stack className={mediaControlStyles}>
      <CommandButton
        onKeyDownCapture={(e) => {
          if (e.keyCode === 13 && props.localVideoRendererIsBusy) {
            e.preventDefault();
          }
        }}
        disabled={cameraDisabled}
        onClick={cameraOnClick}
        className={controlButtonStyle}
      >
        <div className={fullWidth}>
          {cameraActive ? <CallVideoIcon size="medium" /> : <CallVideoOffIcon size="medium" />}
        </div>
      </CommandButton>
      <CommandButton onClick={micOnClick} disabled={micDisabled} className={controlButtonStyle}>
        <div className={fullWidth}>{micActive ? <MicIcon size="medium" /> : <MicOffIcon size="medium" />}</div>
      </CommandButton>
      {props.isLocalScreenShareSupportedInBrowser() && (
        <CommandButton
          disabled={screenShareDisabled}
          onClick={props.onScreenShareChange}
          className={screenShareDisabled ? controlButtonDisabledStyle : controlButtonStyle}
        >
          <div className={fullWidth}>
            {props.screenShareActive ? (
              <CallControlCloseTrayIcon size="medium" />
            ) : (
              <CallControlPresentNewIcon size="medium" />
            )}
          </div>
        </CommandButton>
      )}
      <CommandButton
        onClick={props.onEndCallClick}
        className={props.compressedMode ? controlButtonStyle : endCallButtonStyle}
      >
        <div className={fullWidth}>
          <CallEndIcon size="medium" />
          {!props.compressedMode && <span className={endCallButtonTextStyle}>Leave</span>}
        </div>
      </CommandButton>
    </Stack>
  );
};
