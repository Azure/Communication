// © Microsoft Corporation. All rights reserved.

import React, { useEffect } from "react";
import { Stack, Spinner, PrimaryButton } from '@fluentui/react';
import LocalPreview from './LocalPreview';
import LocalSettings from './LocalSettings';
import { CallClient, PreviewRenderer, VideoDeviceInfo, AudioDeviceInfo, LocalVideoStream } from '@skype/spool-sdk';
import { VideoCameraEmphasisIcon } from '@fluentui/react-icons-northstar';
import {
    videoCameraIconStyle,
    preCallStackTokens,
    buttonStyle,
    localSettingsContainerStyle,
    mainContainerStyle,
    fullScreenStyle,
    localSettingsStackTokens,
    verticalStackStyle
} from './styles/PreCall.styles';

export interface PreCallScreenProps {
    userId: string;
    callClient: CallClient;
    groupId: string;
    setUserId(userId: string): void;
    initCallClient(userId: string): void;
    setGroup(groupId: string): void;
    startCallHandler(): void;
    videoDeviceList: VideoDeviceInfo[];
    audioDeviceList: AudioDeviceInfo[];
    setVideoDeviceInfo(callClient: CallClient, device: VideoDeviceInfo): void;
    setAudioDeviceInfo(device: AudioDeviceInfo): void;
    endLocalPreview(preview: PreviewRenderer): void;
    setMic(mic: boolean): void;
    setLocalVideo(checked: boolean, callClient: CallClient, previewRenderer: PreviewRenderer, device: VideoDeviceInfo, isRendererBusy: boolean): void;
    localVideoRendererIsBusy: boolean;
    previewRenderer: PreviewRenderer;
    videoDeviceInfo: VideoDeviceInfo;
    audioDeviceInfo: AudioDeviceInfo;
    localVideoStream: LocalVideoStream;
    screenWidth: number;
}

export default function PreCallScreen(props: PreCallScreenProps): JSX.Element {
    const spinnerLabel = "Initializing call client...";
    const buttonText = "Start call";

    useEffect(() => {
        props.setUserId(props.userId);
        props.initCallClient(props.userId);
        props.setGroup(props.groupId);
    }, []);

    return (
        <Stack className={mainContainerStyle} horizontalAlign="center" verticalAlign="center" >
        {
            props.callClient ? (
                <Stack 
                    className={props.screenWidth > 750 ? fullScreenStyle : verticalStackStyle} 
                    horizontal={props.screenWidth > 750} 
                    horizontalAlign="center" 
                    verticalAlign="center" 
                    tokens={props.screenWidth > 750 ? preCallStackTokens : undefined}>
                    <LocalPreview
                        setMic={props.setMic} 
                        setLocalVideo={props.setLocalVideo} 
                        localVideoRendererIsBusy = {props.localVideoRendererIsBusy}
                        previewRenderer = {props.previewRenderer}
                        callClient = {props.callClient}
                        videoDeviceInfo = {props.videoDeviceInfo}
                        audioDeviceInfo= {props.audioDeviceInfo}
                        localVideoStream = {props.localVideoStream} />
                    <Stack 
                        className={localSettingsContainerStyle} 
                        tokens={props.screenWidth > 750 ? localSettingsStackTokens : {childrenGap: 24}}>
                        <LocalSettings
                            callClient = {props.callClient}
                            previewRenderer = {props.previewRenderer}
                            videoDeviceList={props.videoDeviceList}
                            audioDeviceList={props.audioDeviceList}
                            audioDeviceInfo= {props.audioDeviceInfo}
                            videoDeviceInfo= {props.videoDeviceInfo}
                            setVideoDeviceInfo = {props.setVideoDeviceInfo}
                            setAudioDeviceInfo = {props.setAudioDeviceInfo} />
                        { 
                            <PrimaryButton 
                                className={buttonStyle} 
                                onClick={() => { 
                                    props.previewRenderer && props.endLocalPreview(props.previewRenderer); 
                                    props.startCallHandler()}
                                }>
                                <VideoCameraEmphasisIcon className={videoCameraIconStyle} size="medium"/>{buttonText}
                            </PrimaryButton>
                        }
                    </Stack>
                </Stack>
            ) :
            (
                <Spinner label={spinnerLabel} ariaLive="assertive" labelPosition="top" />
            )
        }
        </Stack>);
}