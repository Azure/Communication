// © Microsoft Corporation. All rights reserved.
import React from "react";
import { Stack, Toggle, Image, ImageFit } from '@fluentui/react';
import { MicIcon, CallVideoIcon } from '@fluentui/react-icons-northstar';
import { Constants } from '../core/constants';
import { CallClient, PreviewRenderer, VideoDeviceInfo, AudioDeviceInfo, LocalVideoStream } from '@skype/spool-sdk';
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
    setLocalVideo(checked: boolean, callClient: CallClient, previewRenderer: PreviewRenderer, device: VideoDeviceInfo, isRendererBusy: boolean): void;
    localVideoRendererIsBusy: boolean;
    previewRenderer: PreviewRenderer;
    callClient: CallClient;
    videoDeviceInfo: VideoDeviceInfo;
    audioDeviceInfo: AudioDeviceInfo;
    localVideoStream: LocalVideoStream;
}

export default function LocalPreview(props: LocalPreviewProps): JSX.Element {
    const imageProps = {
        src: staticMediaSVG.toString(),
        imageFit: ImageFit.cover,
        maximizeFrame: true,
    };

    function handleLocalVideoOnOff(_ev: React.MouseEvent<HTMLElement>, checked = false): void {
        props.setLocalVideo(checked, props.callClient, props.previewRenderer, props.videoDeviceInfo, props.localVideoRendererIsBusy);
    }
    function handleLocalMicOnOff(_ev: React.MouseEvent<HTMLElement>, checked = false): void {
        props.setMic(checked);
    }
    return (  
        <Stack className={localPreviewContainerStyle}>
            <Stack horizontalAlign="center" verticalAlign="center" id={Constants.PRECALL_LOCAL_VIDEO_PREVIEW_ID} className={localPreviewStyle} >
                {(props.previewRenderer && !props.previewRenderer.isRendering) && <Image styles={imgStyles} {...imageProps}/>}
            </Stack>
            <Stack horizontal horizontalAlign="center" verticalAlign="center" tokens={toggleButtonsBarToken} className={toggleButtonsBarStyle}>
                <CallVideoIcon size="medium" />
                <Toggle styles={toggleStyle} disabled={!props.videoDeviceInfo || props.localVideoRendererIsBusy} onChange={handleLocalVideoOnOff} />
                <MicIcon size="medium" />
                <Toggle styles={toggleStyle} disabled={!props.audioDeviceInfo} onChange={handleLocalMicOnOff} />
            </Stack>
        </Stack>
    )

}