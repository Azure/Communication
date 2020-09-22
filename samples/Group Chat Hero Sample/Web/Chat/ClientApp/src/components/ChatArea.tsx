import { Stack } from '@fluentui/react';
import React, { useEffect } from 'react';

import ChatThread from '../containers/ChatThread';
import SendBox from '../containers/SendBox';
import TypingIndicator from '../containers/TypingIndicator';
import { chatAreaContainerStyle } from './styles/ChatArea.styles';

interface ChatAreaProps {
  endChatHandler(): void;
  onUpdateTypingUsers(): void;
  typingNotifications: any;
}

export default (props: ChatAreaProps): JSX.Element => {
  const { onUpdateTypingUsers } = props;

  useEffect(() => {
    let listener: NodeJS.Timeout = setInterval(() => {
      onUpdateTypingUsers();
    }, 500);
    return () => {
      clearInterval(listener);
    };
  }, [onUpdateTypingUsers]);

  return (
    <Stack className={chatAreaContainerStyle}>
      <ChatThread />
      <TypingIndicator />
      <SendBox />
    </Stack>
  );
};
