import { Call, AcsError, RemoteParticipant } from '@skype/spool-sdk';
import { Reducer } from 'redux';
import { CALL_ADDED, CALL_REMOVED, SET_CALL_STATE, SET_GROUP, SET_PARTICIPANTS, CallTypes } from '../actions/calls';

export interface CallsState {
  group: string;
  call?: Call;
  callState: string;
  incomingCallEndReason: AcsError | undefined;
  groupCallEndReason: AcsError | undefined;
  callEndReason: AcsError | undefined;
  remoteParticipants: RemoteParticipant[];
}

const initialState: CallsState = {
  call: undefined,
  callState: 'None',
  incomingCallEndReason: undefined,
  groupCallEndReason: undefined,
  callEndReason: undefined,
  remoteParticipants: [],
  group: ''
};

export const callsReducer: Reducer<CallsState, CallTypes> = (state = initialState, action: CallTypes): CallsState => {
  switch (action.type) {
    case CALL_ADDED:
      return { ...state, call: action.call, callEndReason: undefined };
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
