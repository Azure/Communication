import React from "react";
import { CloseIcon } from '@fluentui/react-icons-northstar';
import NewLocalSettings from "./LocalSettings";
import ParticipantStack from "../containers/ParticipantStack";
import { VideoDeviceInfo, AudioDeviceInfo, CallClient, PreviewRenderer } from "@skype/spool-sdk";
import { Stack, Icon, PrimaryButton, ActionButton, TextField, Separator } from '@fluentui/react';
import { fullHeightStyles, 
    paneFooterStyles,
    paneFooterTokens,
    textFieldStyles, 
    closeButtonStyle, 
    paneHeaderStyle, 
    footerMainTextStyle, 
    copyLinkButtonStyle,
    copyIconStyle,
    settingsContainerStyle, 
    paneHeaderTextStyle} from './styles/CommandPanel.styles';

export interface CommandPanelProps {
    selectedPane: string;
    callClient: CallClient;
    previewRenderer: PreviewRenderer;
    videoDeviceInfo: VideoDeviceInfo;
    videoDeviceList: VideoDeviceInfo[];
    audioDeviceList: AudioDeviceInfo[];
    audioDeviceInfo: AudioDeviceInfo;
    setSelectedPane: any;
    setVideoDeviceInfo(callClient: CallClient, device: VideoDeviceInfo): void;
    setAudioDeviceInfo(device: AudioDeviceInfo): void;
}
export enum CommandPanelTypes {
    None = "none",
    People = "People",
    Settings = "Settings",
}

function copyJoinLink() {
    const inputElement = document.getElementById("inputText") as HTMLInputElement;
    inputElement.select();
    document.execCommand("copy");
}
export default function CommandPanel(props: CommandPanelProps) {
    const invitePeopleString = "Invite people to join";
    const copyJoinInfoString = "Copy join info";

    return <Stack styles={fullHeightStyles}>
        <Stack.Item className={paneHeaderStyle}>
            <div className={paneHeaderTextStyle}>{props.selectedPane}</div>
            <ActionButton className={closeButtonStyle} onClick={()=>{props.setSelectedPane(CommandPanelTypes.None)}}>
                <CloseIcon size="medium"/>
            </ActionButton>
        </Stack.Item>
        <Stack.Item styles={fullHeightStyles}>
        {   
            props.selectedPane == CommandPanelTypes.People &&
            <Stack verticalAlign="space-between" styles={fullHeightStyles}>
                <ParticipantStack/>
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
        }
        {
        props.selectedPane == CommandPanelTypes.Settings &&
            <div className={settingsContainerStyle}>
                <NewLocalSettings
                    callClient = {props.callClient}
                    previewRenderer = {props.previewRenderer}
                    videoDeviceList={props.videoDeviceList}
                    audioDeviceList={props.audioDeviceList}
                    audioDeviceInfo= {props.audioDeviceInfo}
                    videoDeviceInfo= {props.videoDeviceInfo}
                    setVideoDeviceInfo = {props.setVideoDeviceInfo}
                    setAudioDeviceInfo = {props.setAudioDeviceInfo} />
            </div>
        }
        </Stack.Item>
    </Stack>;
}