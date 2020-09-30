// © Microsoft Corporation. All rights reserved.
import {
  Icon,
  Image,
  PrimaryButton,
  Stack,
  IImageStyles,
  Spinner,
} from '@fluentui/react';
import { ChatIcon } from '@fluentui/react-icons-northstar';
import React, { useState } from 'react';

import heroSVG from '../assets/hero.svg';
import {
  buttonStyle,
  containerTokens,
  headerStyle,
  iconStyle,
  imgStyle,
  listStyle,
  moreInfoStyle,
  nestedStackTokens,
  upperStackStyle,
  upperStackTokens,
  videoCameraIconStyle,
  startChatTextStyle
} from './styles/HomeScreen.styles';

export interface HomeScreenProps {
  createThreadHandler(): void;
}

const imageStyleProps: IImageStyles = {
  image: {
    height: '100%',
  },
  root: {},
};

export default (props: HomeScreenProps): JSX.Element => {
  const spinnerLabel = 'Creating a new chat thread...';
  const iconName = 'SkypeCircleCheck';
  const imageProps = { src: heroSVG.toString() };
  const headerTitle = 'Exceptionally simple chat app';
  const startChatButtonText = 'Start chat';
  const listItems = [
    'Launch a conversation with a single click',
    'Real-time messaging with indicators',
    'Invite up to 250 participants',
  ];

  const [isCreatingThread, setIsCreatingThread] = useState(false);

  const onCreateThread = () => {
    props.createThreadHandler();
    setIsCreatingThread(true);
  };

  const creatThreadLoading = () => {
    return (
      <Spinner label={spinnerLabel} ariaLive="assertive" labelPosition="top" />
    );
  };

  const homeScreen = () => {
    return (
      <div>
        <Stack
          horizontal
          horizontalAlign="center"
          verticalAlign="center"
          tokens={containerTokens}
        >
          <Stack className={upperStackStyle} tokens={upperStackTokens}>
            <div tabIndex={0} className={headerStyle}>
              {headerTitle}
            </div>
            <Stack tokens={nestedStackTokens}>
              <ul className={listStyle}>
                <li tabIndex={0}>
                  <Icon className={iconStyle} iconName={iconName} />{' '}
                  {listItems[0]}
                </li>
                <li tabIndex={0}>
                  <Icon className={iconStyle} iconName={iconName} />{' '}
                  {listItems[1]}
                </li>
                <li tabIndex={0}>
                  <Icon className={iconStyle} iconName={iconName} />{' '}
                  {listItems[2]}
                </li>
              </ul>
            </Stack>
            <PrimaryButton
              id="startChat"
              role="main"
              aria-label="Start chat"
              className={buttonStyle}
              onClick={() => {
                onCreateThread();
              }}
            >
              <ChatIcon className={videoCameraIconStyle} size="medium" />
              <div className={startChatTextStyle}>{startChatButtonText}</div>
            </PrimaryButton>
          </Stack>
          <Image
            styles={imageStyleProps}
            alt="Welcome to the ACS Chat sample app"
            className={imgStyle}
            {...imageProps}
          />
        </Stack>
        <div className={moreInfoStyle}>
          <a href="https://aka.ms/spooldocs">Learn more about this sample</a>
        </div>
      </div>
    );
  };

  return isCreatingThread ? creatThreadLoading() : homeScreen();
};
