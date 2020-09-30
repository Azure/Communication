import { Stack } from '@fluentui/react';
import React, { useEffect, useState } from 'react';

import ChatArea from '../containers/ChatArea';
import ChatHeader from '../containers/ChatHeader';
import SidePanel from '../containers/SidePanel';
import {
  chatScreenBottomContainerStyle,
  chatScreenContainerStyle,
} from './styles/ChatScreen.styles';
import { SidePanelTypes } from './SidePanel';

interface ChatScreenProps {
  threadMembersError: boolean;
  endChatHandler(): void;
  errorHandler(): void;
  getThreadMembers(): void;
  getThread(): void;
  getMessages(): void;
}

export default (props: ChatScreenProps): JSX.Element => {
  // People pane will be visible when a chat is joined if the window width is greater than 600
  const [selectedPane, setSelectedPane] = useState(
    window.innerWidth > 600 ? SidePanelTypes.People : SidePanelTypes.None
  );

  const { errorHandler, threadMembersError, getThread } = props;

  useEffect(() => {
    props.getMessages();
  }, []);

  useEffect(() => {
    if (threadMembersError) {
      errorHandler();
    }
  }, [errorHandler, threadMembersError]);

  useEffect(() => {
    let listener: NodeJS.Timeout = setInterval(() => {
      getThread();
    }, 2000);
    document.getElementById('sendbox')?.focus();
    return () => {
      clearInterval(listener);
    };
  }, [getThread]);

  return (
    <Stack className={chatScreenContainerStyle}>
      <ChatHeader
        endChatHandler={props.endChatHandler}
        selectedPane={selectedPane}
        setSelectedPane={setSelectedPane}
      />
      <Stack className={chatScreenBottomContainerStyle} horizontal={true}>
        <ChatArea endChatHandler={props.endChatHandler} />
        <Stack.Item grow disableShrink>
          <SidePanel
            selectedPane={selectedPane}
            setSelectedPane={setSelectedPane}
          />
        </Stack.Item>
      </Stack>
    </Stack>
  );
};
