import { ChatThread } from '@azure/communication-chat';
import { SET_THREAD, SET_THREAD_TOPIC_NAME, SET_THREAD_ID, ThreadActionTypes } from '../actions/ThreadAction';

export interface ThreadState {
  thread: ChatThread;
  threadId: string | undefined;
}

const initThreadState: ThreadState = {
  thread: {},
  threadId: undefined
};

export const ThreadReducer = (state = initThreadState, action: ThreadActionTypes) => {
  switch (action.type) {
    case SET_THREAD:
      return {
        ...state,
        thread: action.thread
      };
    case SET_THREAD_TOPIC_NAME:
      return {
        ...state,
        thread: { ...state.thread, topic: action.topicName }
      };
    case SET_THREAD_ID:
      return {
        ...state,
        threadId: action.threadId
      };
    default:
      return state;
  }
};
