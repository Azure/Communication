import { Call, CallEndReason, RemoteParticipant, CallAgent } from '@azure/communication-calling';
import { Reducer } from 'redux';
import {
  CALL_ADDED,
  CALL_REMOVED,
  SET_CALL_STATE,
  SET_GROUP,
  SET_PARTICIPANTS,
  CallTypes,
  SET_CALL_AGENT
} from '../actions/calls';

export interface CallsState {
  callAgent?: CallAgent;
  group: string;
  call?: Call;
  callState: string;
  incomingCallEndReason: CallEndReason | undefined;
  groupCallEndReason: CallEndReason | undefined;
  remoteParticipants: RemoteParticipant[];
}

const initialState: CallsState = {
  callAgent: undefined,
  call: undefined,
  callState: 'None',
  incomingCallEndReason: undefined,
  groupCallEndReason: undefined,
  remoteParticipants: [],
  group: ''
};

export const callsReducer: Reducer<CallsState, CallTypes> = (state = initialState, action: CallTypes): CallsState => {
  switch (action.type) {
    case SET_CALL_AGENT:
      return { ...state, callAgent: action.callAgent };
    case CALL_ADDED:
      return { ...state, call: action.call };
    case CALL_REMOVED:
      return {
        ...state,
        call: undefined,
        remoteParticipants: [],
        incomingCallEndReason: action.incomingCallEndReason,
        groupCallEndReason: action.groupCallEndReason
      };
    case SET_CALL_STATE:
      return { ...state, callState: action.callState };
    case SET_PARTICIPANTS:
      return { ...state, remoteParticipants: action.remoteParticipants };
    case SET_GROUP:
      return { ...state, group: action.group };
    default:
      return state;
  }
};
