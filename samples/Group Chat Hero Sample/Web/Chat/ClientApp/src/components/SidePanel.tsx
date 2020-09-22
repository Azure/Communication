import {
  Stack,
  TextField,
  PrimaryButton,
  Icon,
  StackItem,
} from '@fluentui/react';
import React, { useEffect, useState, Dispatch } from 'react';
import {
  FocusZone,
  FocusZoneDirection,
} from 'office-ui-fabric-react/lib/FocusZone';

import { ChatThread, ChatThreadMember } from '@azure/communication-chat';

import { ENTER_KEY, MAXIMUM_LENGTH_OF_TOPIC } from '../../src/constants';
import { getEmoji } from '../core/sideEffects';
import InviteFooter from './InviteFooter';
import MemberItem from './MemberItem';
import { inputBoxTextStyle } from './styles/ConfigurationScreen.styles';
import {
  chatNameTextFieldStyle,
  memberListStyle,
  settingsListStyle,
  saveChatNameButtonStyle,
  sidePanelContainerStyle,
  textFieldIconStyle,
  titleStyle,
  topicWarningStyle,
  chatNameTextWarningFieldStyle,
  emptyWarningStyle,
} from './styles/SidePanel.styles';

interface SidePanelProps {
  setContosoUsers(users: any): void;
  updateThreadTopicName(topicName: string): void;
  users: any;
  threadMembers: ChatThreadMember[];
  identity: string;
  selectedPane: SidePanelTypes;
  setSelectedPane: Dispatch<SidePanelTypes>;
  existsTopicName: boolean;
  thread: ChatThread;
  removeThreadMemberByUserId(obj: any): void;
  removeThreadMemberError: boolean;
  setRemoveThreadMemberError(removeError: boolean): void;
}

export enum SidePanelTypes {
  None = 'none',
  People = 'People',
  Settings = 'Settings',
}

export default (props: SidePanelProps): JSX.Element => {
  const {
    users,
    threadMembers,
    setContosoUsers,
    removeThreadMemberError,
    setRemoveThreadMemberError,
  } = props;

  useEffect(() => {
    const fetchData = async () => {
      var needToSet = false;
      for (var i = 0; i < threadMembers.length; i++) {
        var threadMember = threadMembers[i];
        var identity = threadMember.user.communicationUserId;
        var user = users[identity];
        if (user == null) {
          needToSet = true;
          var serverUser = await getEmoji(identity);
          if (serverUser !== undefined) {
            users[identity] = { emoji: serverUser.emoji };
          }
        }
      }
      if (needToSet) {
        setContosoUsers(users);
      }
    };
    fetchData();
  }, [users, threadMembers, setContosoUsers]);

  useEffect(() => {
    if (removeThreadMemberError) {
      alert(
        "You can't remove participant at this time. Please wait at least 60 seconds to try again."
      );
      setRemoveThreadMemberError(false);
    }
  }, [removeThreadMemberError, setRemoveThreadMemberError]);

  const [topicName, setTopicName] = useState('');
  const [isEditingTopicName, setIsEditingTopicName] = useState(false);
  const [isTopicNameOverflow, setTopicNameOverflow] = useState(false);

  const onTopicNameTextChange = (event: any) => {
    setIsEditingTopicName(true);
    setTopicName(event.target.value);
    if (event.target.value.length > MAXIMUM_LENGTH_OF_TOPIC) {
      setTopicNameOverflow(true);
    } else {
      setTopicNameOverflow(false);
    }
  };

  const onTopicNameSubmit = () => {
    if (topicName.length > MAXIMUM_LENGTH_OF_TOPIC) return;
    props.updateThreadTopicName(topicName);
    setIsEditingTopicName(false);
    setTimeout(() => {
      document.getElementById('focusButton')?.focus();
    }, 100);
  };

  return (
    <>
      <Stack
        verticalAlign="space-between"
        className={sidePanelContainerStyle(
          props.selectedPane === SidePanelTypes.People
        )}
      >
        {/* Title */}
        <span className={titleStyle}>People</span>
        {/* Member list */}
        <StackItem className={memberListStyle}>
          <FocusZone direction={FocusZoneDirection.vertical}>
            {props.threadMembers.map((person, index) => (
              <MemberItem
                key={person.user.communicationUserId}
                userId={person.user.communicationUserId}
                avatar={
                  props.users[person.user.communicationUserId] === undefined
                    ? ''
                    : props.users[person.user.communicationUserId].emoji
                }
                name={person.displayName as string}
                isYou={
                  person.user.communicationUserId === (props.identity as string)
                }
                removeThreadMemberByUserId={props.removeThreadMemberByUserId}
              />
            ))}
          </FocusZone>
        </StackItem>
        {/* Invite link footer */}
        <InviteFooter />
      </Stack>
      <Stack
        verticalAlign="space-between"
        className={sidePanelContainerStyle(
          props.selectedPane === SidePanelTypes.Settings
        )}
      >
        {/* Title */}
        <span className={titleStyle}>Settings</span>
        <div className={settingsListStyle}>
          {/* Change Chat Name */}
          <TextField
            key={props.thread.topic}
            label="Group name"
            styles={
              isTopicNameOverflow
                ? chatNameTextWarningFieldStyle
                : chatNameTextFieldStyle
            }
            inputClassName={inputBoxTextStyle}
            defaultValue={
              isEditingTopicName
                ? topicName
                : props.existsTopicName
                ? props.thread.topic
                : undefined
            }
            placeholder={
              props.existsTopicName ? undefined : 'Type a group name'
            }
            autoComplete="off"
            onSubmit={onTopicNameSubmit}
            onChange={onTopicNameTextChange}
            onKeyUp={(ev) => {
              if (ev.which === ENTER_KEY) {
                onTopicNameSubmit();
              }
            }}
          />
          {(isTopicNameOverflow && (
            <div className={topicWarningStyle}>
              {' '}
              Topic cannot be over 30 characters{' '}
            </div>
          )) ||
            (!isTopicNameOverflow && <div className={emptyWarningStyle} />)}
          <PrimaryButton
            id="editThreadTopicButton"
            className={saveChatNameButtonStyle}
            onClick={(e: any) => onTopicNameSubmit()}
          >
            <Icon iconName="Save" className={textFieldIconStyle} />
            Save
          </PrimaryButton>
        </div>
      </Stack>
    </>
  );
};
