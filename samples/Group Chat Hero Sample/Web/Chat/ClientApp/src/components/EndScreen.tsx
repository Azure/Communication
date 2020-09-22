import { DefaultButton, PrimaryButton, Stack } from '@fluentui/react';
import { ChatIcon } from '@fluentui/react-icons-northstar';
import React from 'react';

import {
  bottomStackFooterStyle,
  buttonsStackTokens,
  buttonStyle,
  endCallContainerStyle,
  endCallTitleStyle,
  mainStackTokens,
  upperStackTokens,
  videoCameraIconStyle,
} from './styles/EndChat.styles';

export interface EndCallProps {
  rejoinHandler(): void;
  rejoinThread(): void;
  homeHandler(): void;
}

export default (props: EndCallProps): JSX.Element => {
  const leftCall = 'You left the chat';
  const goHomePage = 'Go to homepage';
  const rejoinChat = 'Rejoin chat';

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
            className={buttonStyle}
            onClick={() => {
              props.rejoinThread();
              props.rejoinHandler();
            }}
          >
            <ChatIcon className={videoCameraIconStyle} size="medium" />
            {rejoinChat}
          </PrimaryButton>
          <DefaultButton className={buttonStyle} onClick={props.homeHandler}>
            {goHomePage}
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
