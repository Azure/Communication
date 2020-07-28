// © Microsoft Corporation. All rights reserved.
import React, { useState, useEffect } from "react";
import { Stack } from '@fluentui/react';
import Header from "../containers/Header";
import MediaGallery from "../containers/MediaGallery";
import MediaFullScreen from "./MediaFullScreen";
import CommandPanel, {CommandPanelTypes} from './CommandPanel';
import { Constants } from '../core/constants';
import {
    childTokens,
    headerStyles,
    containerStyles,
    paneStyles,
    hiddenContainerClassName,
    activeContainerClassName
} from './styles/GroupCall.styles';
import { CallClient, Call, PreviewRenderer, LocalVideoStream, AudioDeviceInfo, VideoDeviceInfo, RemoteParticipant} from "@skype/spool-sdk";
import { ParticipantStream } from "core/reducers/index.js";

export interface GroupCallProps {
    userId: string;
    groupId: string;
    call: Call;
    mic: boolean;
    callClient: CallClient;
    remoteParticipants: RemoteParticipant[],
    streams: ParticipantStream[],
    callState: string,
    localVideo: boolean,
    previewRenderer: PreviewRenderer,
    localVideoStream: LocalVideoStream,
    activeScreenShareStream: ParticipantStream,
    audioDeviceInfo: AudioDeviceInfo;
    videoDeviceInfo: VideoDeviceInfo;
    audioDeviceList: AudioDeviceInfo[];
    videoDeviceList: VideoDeviceInfo[];
    screenWidth: number;
    setAudioDeviceInfo(deviceInfo: AudioDeviceInfo): void;
    setVideoDeviceInfo(callClient: CallClient, deviceInfo: VideoDeviceInfo): void;
    mute(): void;
    isGroup(): void;
    joinGroup(): void;
    endCallHandler(): void;
}

export default function GroupCall(props: GroupCallProps) {
    const [selectedPane, setSelectedPane] = useState(CommandPanelTypes.None);

    useEffect(() => {
        if (props.callClient && !props.call) {
            props.joinGroup();
            document.title = `${props.groupId} group call sample`;
        }
    }, [props.callClient, props.call]);
    return <Stack horizontalAlign="center" verticalAlign="center" styles={containerStyles} tokens={childTokens}>
                <Stack.Item styles={headerStyles}>
                    <Header 
                        selectedPane={selectedPane} 
                        setSelectedPane={setSelectedPane} 
                        endCallHandler={props.endCallHandler} 
                        screenWidth={props.screenWidth}/>
                </Stack.Item>
                <Stack.Item styles={containerStyles}>
                {
                    props.callState == Constants.CONNECTED && 
                    <Stack horizontal styles={containerStyles}>
                        <Stack.Item grow styles={props.activeScreenShareStream ? activeContainerClassName : hiddenContainerClassName}>
                            { props.activeScreenShareStream && <MediaFullScreen activeScreenShareStream={props.activeScreenShareStream}/> }
                        </Stack.Item>
                        <Stack.Item grow styles={!props.activeScreenShareStream ? activeContainerClassName: hiddenContainerClassName}>
                            <MediaGallery/>
                        </Stack.Item>
                        {
                            selectedPane != CommandPanelTypes.None &&
                            <Stack.Item disableShrink styles={paneStyles}>
                                <CommandPanel {...props} selectedPane={selectedPane} setSelectedPane={setSelectedPane}/>
                            </Stack.Item>
                        }
                    </Stack>
                }
                </Stack.Item>
            </Stack>
}

