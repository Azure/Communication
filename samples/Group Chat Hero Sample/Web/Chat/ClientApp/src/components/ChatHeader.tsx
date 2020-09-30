import {
  DefaultButton,
  Icon,
  IconButton,
  Pivot,
  PivotItem,
  Stack,
} from '@fluentui/react';
import { UserFriendsIcon, SettingsIcon } from '@fluentui/react-icons-northstar';
import React, { Dispatch } from 'react';

import { ChatThread } from '@azure/communication-chat';

import { copyIconStyle } from './styles/SidePanel.styles';
import {
  chatHeaderContainerStyle,
  greyIconButtonStyle,
  iconButtonContainerStyle,
  largeButtonContainerStyle,
  leaveButtonStyle,
  leaveIcon,
  pivotItemStyle,
  pivotItemStyles,
  topicNameLabelStyle,
} from './styles/ChatHeader.styles';
import { SidePanelTypes } from './SidePanel';

interface ChatHeaderProps {
  userId: string;
  endChatHandler(): void;
  generateHeaderMessage(): string;
  existsTopicName: boolean;
  thread: ChatThread;
  selectedPane: SidePanelTypes;
  setSelectedPane: Dispatch<SidePanelTypes>;
  removeThreadMemberByUserId(userId: string): void;
}

export default (props: ChatHeaderProps): JSX.Element => {
  const togglePivotItem = (item: PivotItem | undefined) => {
    if (!item) return;
    if (item.props.itemKey === SidePanelTypes.Settings)
      toggleSettings(props.selectedPane, props.setSelectedPane);
    if (item.props.itemKey === SidePanelTypes.People)
      togglePeople(props.selectedPane, props.setSelectedPane);
  };

  const togglePeople = (
    selectedPane: SidePanelTypes,
    setSelectedPane: (pane: SidePanelTypes) => void
  ) => {
    return selectedPane !== SidePanelTypes.People
      ? setSelectedPane(SidePanelTypes.People)
      : setSelectedPane(SidePanelTypes.None);
  };

  const toggleSettings = (
    selectedPane: SidePanelTypes,
    setSelectedPane: (pane: SidePanelTypes) => void
  ) => {
    return selectedPane !== SidePanelTypes.Settings
      ? setSelectedPane(SidePanelTypes.Settings)
      : setSelectedPane(SidePanelTypes.None);
  };

  const leaveString = 'Leave';

  return (
    <Stack
      className={chatHeaderContainerStyle}
      horizontal={true}
      horizontalAlign="space-between"
    >
      <Stack.Item align="center">
        <div className={topicNameLabelStyle}>
          {props.existsTopicName
            ? props.thread.topic
            : props.generateHeaderMessage()}
        </div>
      </Stack.Item>
      <Stack.Item align="center">
        <Stack horizontal={true}>
          <Stack.Item align="center">
            <Pivot
              onKeyDownCapture={(e) => {
                if (
                  (e.target as HTMLElement).id === SidePanelTypes.People &&
                  e.keyCode === 39
                )
                  e.preventDefault();
              }}
              getTabId={(itemKey: string) => itemKey}
              onLinkClick={(item) => togglePivotItem(item)}
              styles={pivotItemStyles}
              defaultSelectedKey={SidePanelTypes.None}
              selectedKey={props.selectedPane}
            >
              <PivotItem itemKey={SidePanelTypes.None} />
              {/* To Toggle People's Panel */}
              <PivotItem
                itemKey={SidePanelTypes.People}
                onRenderItemLink={() => (
                  <UserFriendsIcon
                    outline={
                      props.selectedPane === SidePanelTypes.People
                        ? false
                        : true
                    }
                    size="medium"
                    className={pivotItemStyle}
                  />
                )}
              />
              {/* To Toggle Settings's Panel */}
              <PivotItem
                itemKey={SidePanelTypes.Settings}
                onRenderItemLink={() => (
                  <SettingsIcon
                    outline={
                      props.selectedPane === SidePanelTypes.Settings
                        ? false
                        : true
                    }
                    size="medium"
                    className={pivotItemStyle}
                  />
                )}
              />
            </Pivot>
          </Stack.Item>
          <Stack.Item align="center">
            <div className={iconButtonContainerStyle}>
              <IconButton
                iconProps={leaveIcon}
                className={greyIconButtonStyle}
                onClick={() => {
                  props.endChatHandler();
                }}
              />
            </div>
            <div className={largeButtonContainerStyle}>
              <DefaultButton
                className={leaveButtonStyle}
                onClick={() => {
                  props.removeThreadMemberByUserId(props.userId);
                  props.endChatHandler();
                }}
              >
                <Icon iconName="Leave" className={copyIconStyle} />
                {leaveString}
              </DefaultButton>
            </div>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
