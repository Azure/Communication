import { DefaultButton, PrimaryButton, Stack } from '@fluentui/react';
import { ChatIcon } from '@fluentui/react-icons-northstar';
import React, { useState } from 'react';

import {
  bottomStackFooterStyle,
  buttonsStackTokens,
  buttonStyle,
  endCallContainerStyle,
  endCallTitleStyle,
  mainStackTokens,
  upperStackTokens,
  videoCameraIconStyle,
  buttonTextStyle
} from './styles/EndChat.styles';

export interface EndCallProps {
  rejoinHandler(): void;
  rejoinThread(): Promise<void>;
  homeHandler(): void;
}

export default (props: EndCallProps): JSX.Element => {
  const leftCall = 'You left the chat';
  const goHomePage = 'Go to homepage';
  const rejoinChat = 'Rejoin chat';
  const rejoining = 'Rejoining...';

  const [isRejoiningThread, setIsRejoiningThread] = useState(false);

  const rejoinThread = async () => {
    if (!isRejoiningThread) {
      setIsRejoiningThread(true);
      await props.rejoinThread();
      props.rejoinHandler();
    }
  };

  return (
    <Stack
      verticalAlign="center"
      tokens={mainStackTokens}
      className={endCallContainerStyle}
    >
      <Stack tokens={upperStackTokens}>
        <div tabIndex={0} className={endCallTitleStyle}>
          {leftCall}
        </div>
        <Stack horizontal tokens={buttonsStackTokens}>
          <PrimaryButton
            disabled={isRejoiningThread}
            className={buttonStyle}
            onClick={async () => { await rejoinThread(); }}
          >
            <ChatIcon className={videoCameraIconStyle} size="medium" />
            <div className={buttonTextStyle}>{isRejoiningThread ? rejoining : rejoinChat}</div>
          </PrimaryButton>
          <DefaultButton className={buttonStyle} onClick={props.homeHandler}>
            <div className={buttonTextStyle}> {goHomePage}</div>
          </DefaultButton>
        </Stack>
      </Stack>
      <div className={bottomStackFooterStyle}>
        <a href="https://github.com/Azure/Communication/issues">
          Give Feedback
        </a>
        &nbsp;on this sample app on Github
      </div>
    </Stack>
  );
};
