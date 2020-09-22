import { CallEndReason, Call, RemoteParticipant, CallAgent } from '@azure/communication-calling';

const SET_CALL_AGENT = 'SET_CALL_AGENT';
const SET_GROUP = 'SET_GROUP';
const CALL_ADDED = 'CALL_ADDED';
const CALL_REMOVED = 'CALL_REMOVED';
const SET_CALL_STATE = 'SET_CALL_STATE';
const SET_PARTICIPANTS = 'SET_PARTICIPANTS';

interface SetCallAgentAction {
  type: typeof SET_CALL_AGENT;
  callAgent: CallAgent;
}
interface SetGroupAction {
  type: typeof SET_GROUP;
  group: any;
}

interface CallAddedAction {
  type: typeof CALL_ADDED;
  call: Call;
}

interface CallRemovedAction {
  type: typeof CALL_REMOVED;
  call: Call | undefined;
  incomingCallEndReason: CallEndReason | undefined;
  groupCallEndReason: CallEndReason | undefined;
}

interface SetCallStateAction {
  type: typeof SET_CALL_STATE;
  callState: string;
}

interface SetParticipantsAction {
  type: typeof SET_PARTICIPANTS;
  remoteParticipants: RemoteParticipant[];
}

export const setCallAgent = (callAgent: CallAgent): SetCallAgentAction => {
  return {
    type: SET_CALL_AGENT,
    callAgent
  };
};

export const setGroup = (groupId: string): SetGroupAction => {
  return {
    type: SET_GROUP,
    group: groupId
  };
};

export const callAdded = (addedCall: Call): CallAddedAction => {
  return {
    type: CALL_ADDED,
    call: addedCall
  };
};

export const callRemoved = (removedCall: Call, group: string): CallRemovedAction => {
  return {
    type: CALL_REMOVED,
    call: undefined,
    incomingCallEndReason: removedCall.isIncoming ? removedCall.callEndReason : undefined,
    groupCallEndReason: !removedCall.isIncoming && !!group ? removedCall.callEndReason : undefined
  };
};

export const setCallState = (callState: string): SetCallStateAction => {
  return {
    type: SET_CALL_STATE,
    callState
  };
};

export const setParticipants = (participants: RemoteParticipant[]): SetParticipantsAction => {
  return {
    type: SET_PARTICIPANTS,
    remoteParticipants: participants
  };
};

export { SET_CALL_AGENT, SET_GROUP, CALL_ADDED, CALL_REMOVED, SET_CALL_STATE, SET_PARTICIPANTS };

export type CallTypes =
  | SetCallAgentAction
  | SetParticipantsAction
  | SetCallStateAction
  | SetGroupAction
  | CallAddedAction
  | CallRemovedAction;
