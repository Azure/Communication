// © Microsoft Corporation. All rights reserved.
import React from 'react';
import { Stack, PrimaryButton, Icon, Image, IImageStyles } from '@fluentui/react';
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
  startCallHandler(): void;
}

const imageStyleProps: IImageStyles = {
  image: {
    height: '100%',
    width: '100%'
  },
  root: {}
};

export default (props: HomeScreenProps): JSX.Element => {
  const iconName = 'SkypeCircleCheck';
  const imageProps = { src: heroSVG.toString() };
  const headerTitle = 'Exceptionally simple video calling';
  const startCallButtonText = 'Start a call';
  const listItems = [
    'Customize with your web stack',
    'Connect with users with seamless collaboration across web',
    'High quality, low latency capabilities for an uninterrupted calling experience',
    'Learn about this'
  ];
  return (
    <Stack horizontal horizontalAlign="center" verticalAlign="center" tokens={containerTokens}>
      <Stack className={upperStackStyle} tokens={upperStackTokens}>
        <div className={headerStyle}>{headerTitle}</div>
        <Stack tokens={nestedStackTokens} className={listStyle}>
          <li>
            <Icon className={iconStyle} iconName={iconName} /> {listItems[0]}
          </li>
          <li>
            <Icon className={iconStyle} iconName={iconName} /> {listItems[1]}
          </li>
          <li>
            <Icon className={iconStyle} iconName={iconName} /> {listItems[2]}
          </li>
          <li>
            <Icon className={iconStyle} iconName={iconName} /> {listItems[3]}{' '}
            <a href="https://aka.ms/ACS-CallingSample">sample</a>
          </li>
        </Stack>
        <PrimaryButton className={buttonStyle} onClick={props.startCallHandler}>
          <VideoCameraEmphasisIcon className={videoCameraIconStyle} size="medium" />
          {startCallButtonText}
        </PrimaryButton>
      </Stack>
      <Image
        alt="Welcome to the ACS Calling sample app"
        className={imgStyle}
        styles={imageStyleProps}
        {...imageProps}
      />
    </Stack>
  );
};
