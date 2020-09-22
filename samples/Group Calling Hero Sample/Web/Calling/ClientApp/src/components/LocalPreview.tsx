// © Microsoft Corporation. All rights reserved.
import React, { useEffect } from 'react';
import { Stack, Toggle, Image, ImageFit } from '@fluentui/react';
import { MicIcon, CallVideoIcon } from '@fluentui/react-icons-northstar';
import { Constants } from '../core/constants';
import {
  RendererView,
  VideoDeviceInfo,
  AudioDeviceInfo,
  LocalVideoStream,
  Renderer
} from '@azure/communication-calling';
import staticMediaSVG from '../assets/staticmedia.svg';
import {
  toggleStyle,
  imgStyles,
  toggleButtonsBarToken,
  localPreviewContainerStyle,
  toggleButtonsBarStyle,
  localPreviewStyle
} from './styles/LocalPreview.styles';

export interface LocalPreviewProps {
  setMic(mic: boolean): void;
  setLocalVideoStream(device: LocalVideoStream | undefined): void;
  videoDeviceInfo: VideoDeviceInfo;
  audioDeviceInfo: AudioDeviceInfo;
  localVideoStream: LocalVideoStream;
}

var rendererView: RendererView;

export default (props: LocalPreviewProps): JSX.Element => {
  const imageProps = {
    src: staticMediaSVG.toString(),
    imageFit: ImageFit.cover,
    maximizeFrame: true
  };

  const handleLocalVideoOnOff = (_ev: React.MouseEvent<HTMLElement>, checked = false): void => {
    var stream = new LocalVideoStream(props.videoDeviceInfo);
    props.setLocalVideoStream(checked ? stream : undefined);
  };
  const handleLocalMicOnOff = (_ev: React.MouseEvent<HTMLElement>, checked = false): void => {
    props.setMic(checked);
  };

  useEffect(() => {
    (async () => {
      if (props.localVideoStream) {
        var renderer: Renderer = new Renderer(props.localVideoStream);
        rendererView = await renderer.createView({ scalingMode: 'Crop' });

        var container = document.getElementById(Constants.CONFIGURATION_LOCAL_VIDEO_PREVIEW_ID);

        if (container && container.childElementCount === 0) {
          container.appendChild(rendererView.target);
        }
      }
    })();

    return () => {
      if (rendererView) {
        rendererView.dispose();
      }
    };
  }, [props.localVideoStream]);
  return (
    <Stack className={localPreviewContainerStyle}>
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        id={Constants.CONFIGURATION_LOCAL_VIDEO_PREVIEW_ID}
        className={localPreviewStyle}
      >
        {!props.localVideoStream && <Image styles={imgStyles} {...imageProps} />}
      </Stack>
      <Stack
        horizontal
        horizontalAlign="center"
        verticalAlign="center"
        tokens={toggleButtonsBarToken}
        className={toggleButtonsBarStyle}
      >
        <CallVideoIcon size="medium" />
        <Toggle
          onKeyDownCapture={(e) => {
            // if (e.keyCode === 13 && props.localVideoRendererIsBusy) {
            //     e.preventDefault();
            // }
          }}
          styles={toggleStyle}
          disabled={!props.videoDeviceInfo}
          onChange={handleLocalVideoOnOff}
        />
        <MicIcon size="medium" />
        <Toggle styles={toggleStyle} disabled={!props.audioDeviceInfo} onChange={handleLocalMicOnOff} />
      </Stack>
    </Stack>
  );
};
