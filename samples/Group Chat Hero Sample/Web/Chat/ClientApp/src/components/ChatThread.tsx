import { Stack, TooltipHost, PrimaryButton, Icon } from '@fluentui/react';
import {
  Chat,
  MessageSeenIcon,
  Flex,
  Ref,
  Button,
  PresenceAvailableIcon,
  PresenceStrokeIcon,
  RedbangIcon,
} from '@fluentui/react-northstar';
import React, { useEffect, useState, createRef, useRef } from 'react';
import { LiveAnnouncer, LiveMessage } from 'react-aria-live';

import { URL_REGEX, NUMBER_OF_MESSAGES_TO_LOAD } from '../constants';
import {
  chatContainerStyle,
  messageAvatarContainerStyle,
  noReadReceiptStyle,
  chatStyle,
  chatMessageStyle,
  newMessageButtonStyle,
  loadMoreMessageButtonStyle,
  readReceiptIconStyle,
  DownIconStyle,
} from './styles/ChatThread.styles';
import { User } from '../core/reducers/ContosoClientReducers';
import { ChatMessageWithClientMessageId } from '../core/reducers/MessagesReducer';

interface ChatThreadProps {
  isYourLatestMessage(clientMessageId: string, messages: any[]): boolean;
  isYourLatestSeenMessage(
    clientMessageId: string,
    MessagesWithSeen: any[]
  ): boolean;
  isLargeParticipantsGroup(): boolean;
  isMessageSeen(clientMessageId: string, messages: any[]): boolean;
  sendReadReceipt(messages: any[], userId: string): void;
  messages: ChatMessageWithClientMessageId[];
  user: User;
  users: any;
  failedMessages: string[];
}

// Reference: https://stackoverflow.com/questions/33235890/react-replace-links-in-a-text
const renderHyperlink = (text: string) =>
  text.split(' ').map((part) =>
    URL_REGEX.test(part) ? (
      <a href={part} target="_blank" rel="noopener noreferrer">
        {part}{' '}
      </a>
    ) : (
      part + ' '
    )
  );

let createdRef: any = createRef();
let chatThreadRef: any = createRef();
//  A Chatthread will be fed many messages so it will try to map out the messages out of the props and feed them into a
//  Chat item
//  We need to be smarter and figure out for the last N messages are they all of the same person or not?
export default (props: ChatThreadProps): JSX.Element => {
  const [messagesWithAttached, setMessagesWithAttached] = useState<any[]>([]);
  const [indexOfTheFirstMessage, setIndexOfTheFirstMessage] = useState(
    props.messages.length
  );
  const [isAtBottomOfScroll, setIsAtBottomOfScroll] = useState(true);
  const [isAtTopOfScroll, setIsAtTopOfScroll] = useState(false);
  const [existsNewMessage, setExistsNewMessage] = useState(false);
  const [
    shouldUpdateMessageWithAttached,
    setShouldUpdateMessageWithAttached,
  ] = useState(false);
  const [numberOfMessagesToRender, setNumberOfMessagesToRender] = useState(0);
  const existsNewMessageText = 'New Messages';
  const loadMoreText = 'click to load more messages...';
  const unableToLoadMoreText = 'You have reached the beginning of the thread';

  const messagesWithAttachedRef = useRef(messagesWithAttached);
  const setMessagesWithAttachedRef = (messagesWithAttachedValue: any[]) => {
    messagesWithAttachedRef.current = messagesWithAttachedValue;
    setMessagesWithAttached(messagesWithAttachedValue);
  };

  const isAtBottomOfScrollRef = useRef(isAtBottomOfScroll);
  const setIsAtBottomOfScrollRef = (isAtBottomOfScrollValue: boolean) => {
    isAtBottomOfScrollRef.current = isAtBottomOfScrollValue;
    setIsAtBottomOfScroll(isAtBottomOfScrollValue);
  };

  const numberOfMessagesToRenderRef = useRef(numberOfMessagesToRender);
  const setNumberOfMessagesToRenderRef = (
    numberOfMessagesToRenderValue: number
  ) => {
    numberOfMessagesToRenderRef.current = numberOfMessagesToRenderValue;
    setNumberOfMessagesToRender(numberOfMessagesToRenderValue);
  };

  useEffect(() => {
    setNumberOfMessagesToRenderRef(
      Math.ceil(chatThreadRef.current.clientHeight / 34)
    ); //34 px is the minimum height of the chat bubble
  }, [chatThreadRef.current?.clientHeight]);

  useEffect(() => {
    updateIndexOfTheFirstMessage();
  }, [numberOfMessagesToRender]);

  useEffect(() => {
    if (
      props.messages.length > 0 &&
      props.messages[props.messages.length - 1].sender?.communicationUserId ===
        props.user.identity
    ) {
      // after sending a message, scroll to bottom
      scrollToBottom();
      updateIndexOfTheFirstMessage();
    } else if (isAtBottomOfScroll) {
      updateIndexOfTheFirstMessage();
    } else {
      setExistsNewMessage(true);
    }
    window.addEventListener('focus', sendReadReceipt);
    createdRef.current.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('focus', sendReadReceipt);
      createdRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [props.messages]);

  useEffect(() => {
    if (shouldUpdateMessageWithAttached) {
      updateMessageWithAttached();
    }
    setShouldUpdateMessageWithAttached(false);
  }, [shouldUpdateMessageWithAttached]);

  // auto scroll to the latest message when we are at bottom of the scroll
  useEffect(() => {
    if (isAtBottomOfScroll) {
      scrollToBottom();
    }
  }, [messagesWithAttached]);

  const loadMoreMessages = () => {
    updateIndexOfTheFirstMessageToLoadMore();
  };

  const loadNewMessages = () => {
    scrollToBottom();
    updateIndexOfTheFirstMessage();
  };

  const scrollToBottom = () => {
    createdRef.current.scrollTop =
      createdRef.current.scrollHeight - createdRef.current.clientHeight;
    setExistsNewMessage(false);
  };

  const sendReadReceipt = () => {
    props.sendReadReceipt(messagesWithAttachedRef.current, props.user.identity);
  };

  const readReceiptIcon = (message: any) => {
    // message is pending send or is failed to be sent
    if (message.createdOn === undefined) {
      let messageFailed: boolean =
        props.failedMessages.find(
          (failedMessage: string) => failedMessage === message.clientMessageId
        ) !== undefined;
      return messageFailed ? (
        <TooltipHost content="failed to send">
          <RedbangIcon size="medium" styles={{ color: 'red' }} />{' '}
        </TooltipHost>
      ) : (
        <TooltipHost content="sending">
          <PresenceStrokeIcon size="medium" />{' '}
        </TooltipHost>
      );
    } else {
      // show read receipt if it's not a large participant group
      if (!props.isLargeParticipantsGroup()) {
        let MessagesWithSeen = messagesWithAttached.map(
          (messageWithAttached) => {
            let isSeen = props.isMessageSeen(
              messageWithAttached.clientMessageId,
              messagesWithAttached
            );
            return { ...messageWithAttached, isSeen };
          }
        );
        if (
          props.isYourLatestSeenMessage(
            message.clientMessageId,
            MessagesWithSeen
          )
        ) {
          return (
            <TooltipHost content="seen">
              <MessageSeenIcon size="medium" />
            </TooltipHost>
          );
        }
      }
      if (props.isYourLatestMessage(message.id, messagesWithAttached)) {
        return (
          <TooltipHost content="sent">
            <PresenceAvailableIcon size="medium" />
          </TooltipHost>
        );
      } else {
        return <div className={noReadReceiptStyle}></div>;
      }
    }
  };

  const handleScroll = () => {
    let atBottom =
      createdRef.current.scrollTop >=
      createdRef.current.scrollHeight - createdRef.current.clientHeight;
    let atTop = createdRef.current.scrollTop === 0;
    if (atBottom && !isAtBottomOfScrollRef.current) {
      loadNewMessages();
    }
    setIsAtBottomOfScrollRef(atBottom);
    setIsAtTopOfScroll(atTop);
  };

  const updateIndexOfTheFirstMessageToLoadMore = () => {
    setIndexOfTheFirstMessage(
      indexOfTheFirstMessage > NUMBER_OF_MESSAGES_TO_LOAD
        ? indexOfTheFirstMessage - NUMBER_OF_MESSAGES_TO_LOAD
        : 0
    );
    setShouldUpdateMessageWithAttached(true);
  };

  const updateIndexOfTheFirstMessage = () => {
    setIndexOfTheFirstMessage(
      props.messages.length > numberOfMessagesToRenderRef.current
        ? props.messages.length - numberOfMessagesToRenderRef.current
        : 0
    );
    setShouldUpdateMessageWithAttached(true);
  };

  const updateMessageWithAttached = () => {
    let newMessagesWithAttached: any[] = [];
    let messagesToRender = props.messages.slice(
      indexOfTheFirstMessage,
      props.messages.length
    );
    messagesToRender.map((message: any, index: number, messagesList: any) => {
      let mine = message.sender.communicationUserId === props.user.identity;
      let attached: string | boolean = false;
      if (index === 0) {
        if (index !== messagesList.length - 1) {
          //the next message has the same sender
          if (
            messagesList[index].sender.communicationUserId ===
            messagesList[index + 1].sender.communicationUserId
          ) {
            attached = 'top';
          }
        }
      } else {
        if (
          messagesList[index].sender.communicationUserId ===
          messagesList[index - 1].sender.communicationUserId
        ) {
          //the previous message has the same sender
          if (index !== messagesList.length - 1) {
            if (
              messagesList[index].sender.communicationUserId ===
              messagesList[index + 1].sender.communicationUserId
            ) {
              //the next message has the same sender
              attached = true;
            } else {
              //the next message has a different sender
              attached = 'bottom';
            }
          } else {
            // this is the last message of the whole messages list
            attached = 'bottom';
          }
        } else {
          //the previous message has a different sender
          if (index !== messagesList.length - 1) {
            if (
              messagesList[index].sender.communicationUserId ===
              messagesList[index + 1].sender.communicationUserId
            ) {
              //the next message has the same sender
              attached = 'top';
            }
          }
        }
      }
      let messageWithAttached = { ...message, attached, mine };
      newMessagesWithAttached.push(messageWithAttached);
    });
    setMessagesWithAttachedRef(newMessagesWithAttached);
  };

  return (
    <Ref innerRef={chatThreadRef}>
      <Stack className={chatContainerStyle}>
        {isAtTopOfScroll && (
          <Button
            text
            fluid
            className={loadMoreMessageButtonStyle}
            content={
              indexOfTheFirstMessage === 0 ? unableToLoadMoreText : loadMoreText
            }
            disabled={indexOfTheFirstMessage === 0}
            onClick={loadMoreMessages}
          />
        )}
        <Ref innerRef={createdRef}>
          <LiveAnnouncer>
            <Chat
              styles={chatStyle}
              items={messagesWithAttached.map((message: any, index: number) => {
                const liveAuthor = `${message.senderDisplayName} says `;
                const messageContentItem = (
                  <div>
                    <LiveMessage
                      message={`${message.mine ? '' : liveAuthor} ${
                        message.content
                      }`}
                      aria-live="polite"
                    />
                    {renderHyperlink(message.content)}
                  </div>
                );
                return {
                  gutter: message.mine ? (
                    ''
                  ) : (
                    <div
                      className={messageAvatarContainerStyle(
                        props.users[message.sender.communicationUserId] ===
                          undefined
                          ? ''
                          : props.users[message.sender.communicationUserId]
                              .emoji
                      )}
                    >
                      {props.users[message.sender.communicationUserId] ===
                      undefined
                        ? ''
                        : props.users[message.sender.communicationUserId].emoji}
                    </div>
                  ),
                  key: index,
                  contentPosition: message.mine ? 'end' : 'start',
                  message: (
                    <Flex vAlign="end">
                      <Chat.Message
                        styles={chatMessageStyle(message.mine)}
                        content={messageContentItem}
                        author={message.senderDisplayName}
                        mine={message.mine}
                      />
                      <div className={readReceiptIconStyle(message.mine)}>
                        {readReceiptIcon(message)}
                      </div>
                    </Flex>
                  ),
                  attached: message.attached,
                };
              })}
            />
          </LiveAnnouncer>
        </Ref>
        {existsNewMessage && (
          <div>
            <PrimaryButton
              className={newMessageButtonStyle}
              onClick={loadNewMessages}
            >
              <Icon iconName="Down" className={DownIconStyle} />
              {existsNewMessageText}
            </PrimaryButton>
          </div>
        )}
      </Stack>
    </Ref>
  );
};
