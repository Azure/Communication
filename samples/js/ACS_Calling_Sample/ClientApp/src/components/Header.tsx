// © Microsoft Corporation. All rights reserved.
import React from "react";
import { Separator, Pivot, PivotItem, Stack } from '@fluentui/react';
import { Call } from '@skype/spool-sdk';
import MediaControls from './MediaControls';
import { CommandPanelTypes } from './CommandPanel';
import { UserFriendsIcon, SettingsIcon } from '@fluentui/react-icons-northstar';
import {
    headerContainer,
    pivotItemStyles,
    mediaControlsContainer,
    separatorContainerStyle,
    separatorStyles,
    pivotItemStyle,
    pivotContainerStyle,
    headerCenteredContainer
} from './styles/Header.styles';
import { ParticipantStream } from "core/reducers";

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
    activeScreenShareStream: ParticipantStream | undefined;
    localVideoRendererIsBusy: boolean;
    cameraPermission: string;
    microphonePermission: string;
    screenWidth: number;
    setMic(mic: boolean): void;
    setLocalVideo(localVideo: boolean): void;
    setScreenShare(screenShare: boolean): void;
    isLocalScreenShareSupportedInBrowser(): boolean;
}

export default function Header(props: HeaderProps) {
    function togglePeople(selectedPane: string, setSelectedPane: (pane: string) => void) {
        return selectedPane != CommandPanelTypes.People ? setSelectedPane(CommandPanelTypes.People) : setSelectedPane(CommandPanelTypes.None);
    }
    function toggleOptions(selectedPane: string, setSelectedPane: (pane: string) => void) {
        return selectedPane != CommandPanelTypes.Settings ? setSelectedPane(CommandPanelTypes.Settings) : setSelectedPane(CommandPanelTypes.None);
    }
    function handleLocalVideoOnOff() {
        props.setLocalVideo(!props.localVideo);
    }
    function handleMuteOnOff() {
        props.setMic(!props.mic);
    }
    function handleScreenSharingOnOff() {
        props.setScreenShare(!props.shareScreen);
    }
    return <Stack id="header" className={props.screenWidth > 360 ? headerContainer : headerCenteredContainer}>
                <div className={mediaControlsContainer}>
                    <MediaControls
                        micActive={props.mic} 
                        onMicChange={handleMuteOnOff}
                        cameraActive={props.localVideo} 
                        onCameraChange={handleLocalVideoOnOff}
                        screenShareActive={props.shareScreen}
                        activeScreenShareStream={props.activeScreenShareStream}
                        onScreenShareChange={handleScreenSharingOnOff}
                        onEndCallClick={()=> {
                            if(props.localVideo)
                                handleLocalVideoOnOff();
                            props.endCall();
                        }}
                        cameraPermission={props.cameraPermission}
                        microphonePermission={props.microphonePermission}
                        localVideoRendererIsBusy={props.localVideoRendererIsBusy}
                        compressedMode={props.screenWidth <= 360}
                        isLocalScreenShareSupportedInBrowser={props.isLocalScreenShareSupportedInBrowser}
                    />
                </div>
                {
                    props.screenWidth > 360 &&
                    <div className={separatorContainerStyle} >
                        <Separator styles = {separatorStyles} vertical={true}  />
                    </div>
                }
                <Pivot 
                    onLinkClick={(item) => { 
                        if (!item)
                            return;
                        if (item.props.itemKey == CommandPanelTypes.Settings) 
                            toggleOptions(props.selectedPane, props.setSelectedPane)
                        if (item.props.itemKey == CommandPanelTypes.People) 
                            togglePeople(props.selectedPane, props.setSelectedPane)
                    }}
                    className={pivotContainerStyle}
                    styles={pivotItemStyles}
                    initialSelectedKey={CommandPanelTypes.None}
                    selectedKey={props.selectedPane}>
                    <PivotItem 
                        itemKey={CommandPanelTypes.Settings}
                        onRenderItemLink={()=>
                            <SettingsIcon 
                                outline={props.selectedPane == CommandPanelTypes.Settings ? false : true} 
                                size="medium" 
                                className={pivotItemStyle}/>
                        } />
                    <PivotItem
                        itemKey={CommandPanelTypes.People}
                        onRenderItemLink={()=>
                            <UserFriendsIcon 
                                outline={props.selectedPane == CommandPanelTypes.People ? false : true} 
                                size="medium" 
                                className={pivotItemStyle} />
                        } />
                    <PivotItem itemKey={CommandPanelTypes.None}/>
                </Pivot>
            </Stack>
}