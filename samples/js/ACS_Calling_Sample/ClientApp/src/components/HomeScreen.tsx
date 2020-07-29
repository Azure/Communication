// © Microsoft Corporation. All rights reserved.
import React from "react";
import { Stack, PrimaryButton, Icon, Image } from '@fluentui/react';
import { VideoCameraEmphasisIcon } from '@fluentui/react-icons-northstar';
import heroSVG from '../assets/hero.svg';
import {
    imgStyle,
    containerTokens,
    listStyle,
    iconStyle,
    headerStyle,
    upperStackTokens,
    videoCameraIconStyle,
    buttonStyle,
    nestedStackTokens,
    upperStackStyle
} from './styles/HomeScreen.styles';

export interface HomeScreenProps {
    startCallHandler(): void
}

export default function HomeScreen(props: HomeScreenProps) {
    const iconName = "SkypeCircleCheck";
    const imageProps = { src: heroSVG.toString() };
    const headerTitle = "Exceptionally simple video calling";
    const startCallButtonText = "Start a call";
    const listItems = [
        "Up to 50 participants",
        "High quality video and sound",
        "Industry-leading security",
        "Learn about this sample and more at"
    ];
    return (
        <Stack horizontal horizontalAlign="center" verticalAlign="center" tokens={containerTokens}>
            <Stack className={upperStackStyle} tokens={upperStackTokens}>
                <div className={headerStyle}>
                    {headerTitle}
                </div>
                <Stack tokens={nestedStackTokens} className={listStyle}>
                    <li><Icon className={iconStyle} iconName={iconName}/> {listItems[0]}</li>
                    <li><Icon className={iconStyle} iconName={iconName}/> {listItems[1]}</li>
                    <li><Icon className={iconStyle} iconName={iconName}/> {listItems[2]}</li>
                    <li><Icon className={iconStyle} iconName={iconName}/> {listItems[3]} <a href="https://aka.ms/spooldocs">aka.ms/spooldocs</a></li>
                </Stack>
                <PrimaryButton className={buttonStyle} onClick={props.startCallHandler}>
                    <VideoCameraEmphasisIcon className={videoCameraIconStyle} size="medium" />
                    {startCallButtonText}
                </PrimaryButton>
            </Stack>
            <Image className={imgStyle} {...imageProps}/>
        </Stack>
    )
}

