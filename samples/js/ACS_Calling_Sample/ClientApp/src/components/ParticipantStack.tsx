import * as React from 'react';
import {Persona, PersonaSize, Stack, IconButton, PersonaPresence, FontIcon, OverflowSet} from '@fluentui/react';
import {
  itemStyles,
  participantStackStyle,
  participantStackTokens,
  overFlowButtonStyles,
  iconStyle
} from './styles/ParticipantStack.styles';
import { RemoteParticipant, Call } from '@skype/spool-sdk';
import { ParticipantStream } from 'core/reducers';

export interface ParticipantStackProps {
    userId: string;
    call: Call;
    callState: string;
    activeScreenShareStream: ParticipantStream;
    remoteParticipants: RemoteParticipant[];
    removeParticipant(userId: string): void;
}
export interface CallParticipant {
    key: string;
    name: string;
    state: string;
    isScreenSharing: boolean;
}

const onRenderItem = (item: any) => (
    <>
        <Persona
          text={item.name}
          styles={itemStyles}
          size={PersonaSize.size32}
          presence={item.state == "Connected" ? PersonaPresence.online : PersonaPresence.offline} /> 
        {
          item.isScreenSharing && <FontIcon className={iconStyle} iconName='ScreenCast' />
        }
    </>
);
const onRenderOverflowButton = (overflowItems: any) => (
    <IconButton
      role="menuitem"
      title="More options"
      styles={overFlowButtonStyles}
      menuIconProps={{ iconName: 'More' }}
      menuProps={{ items: overflowItems }}
    />
);
const getParticipants = (participants: CallParticipant[], removeParticipant: (userId: string) => void) => (
    participants.map((item, i) => (
        <OverflowSet
          key={i}
          items = {[item]}
          role="menubar"
          overflowItems={
              item.name.endsWith("(You)") ? [] : [
              {
                  key: item.name,
                  userId: item.name,
                  name: 'Remove participant',
                  onClick: ()=> removeParticipant(item.name),
              },
          ]}
          onRenderOverflowButton={onRenderOverflowButton}
          onRenderItem={onRenderItem}
      />) 
    )   
);
export default function ParticipantStack(props: ParticipantStackProps) {
    const activeScreenShares = props.activeScreenShareStream;
    const participants = props.remoteParticipants.map(participant => {
      const isScreenSharing = activeScreenShares ? activeScreenShares.userId == participant.userId : false;
      return {
          key: participant.userId,
          name: participant.userId,
          state: participant.state,
          isScreenSharing: isScreenSharing
      }
    });
    participants.push({
        key: props.userId + " (You)",
        name: props.userId + " (You)",
        state: 'Connected',
        isScreenSharing: activeScreenShares ? activeScreenShares.userId == props.userId : false
    });
    return  <Stack className={participantStackStyle} tokens={participantStackTokens}>
              {getParticipants(participants, props.removeParticipant)}
            </Stack>
}