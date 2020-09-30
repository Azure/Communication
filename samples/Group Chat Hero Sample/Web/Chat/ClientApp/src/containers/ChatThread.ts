import { connect } from 'react-redux';

import ChatThread from '../components/ChatThread';
import { State } from '../core/reducers/index';
import { sendReadReceipt } from '../core/sideEffects';
import { PARTICIPANTS_THRESHOLD } from '../constants';

const mapStateToProps = (state: State) => ({
  messages: state.chat.messages,
  user: state.contosoClient.user,
  users: state.contosoClient.users,
  failedMessages: state.chat.failedMessages,
  isYourLatestMessage: (messageId: string, messages: any[]) => {
    let latestArrivalTime: any = -1;
    let latestMessageId: string | undefined = undefined;

    for (var i = 0; i < messages.length; i++) {
      let date: any = messages[i].createdOn;
      if (
        messages[i].sender.communicationUserId === state.contosoClient.user.identity &&
        messages[i] &&
        new Date(date) >= new Date(latestArrivalTime)
      ) {
        latestArrivalTime = messages[i].createdOn;
        latestMessageId = messages[i].id;
      }
    }

    // we know the message we are rendering is not our latest message so we dont want to render a seen component
    if (messageId !== latestMessageId || latestMessageId === undefined) {
      return false;
    }

    return true;
  },
  isLargeParticipantsGroup: () => {
    return state.threadMembers.threadMembers.length >= PARTICIPANTS_THRESHOLD;
  },
  isMessageSeen: (clientMessageId: string, messages: any[]) => {
    if (!state.conversations.receipts || state.conversations.receipts.length === 0) {
      return false;
    }

    let message = messages.find((message) => message.clientMessageId === clientMessageId);
    let latestArrivalTime: any = message ? message.createdOn : -1;

    var numSeen = state.conversations.receipts.filter((receipt) => {
      if ((receipt.sender?.communicationUserId as string) === state.contosoClient.user.identity) {
        //don't count sender's own read receipt
        return false;
      }
      let readMessagecreatedOn = messages.find((message) => message.id === receipt.chatMessageId)?.createdOn;
      return new Date(readMessagecreatedOn) >= new Date(latestArrivalTime);
    }).length;

    return numSeen > 0 ? true : false;
  },
  isYourLatestSeenMessage: (clientMessageId: string, MessagesWithSeen: any[]) => {
    let latestArrivalTime: any = -1;
    let latestMessageId: string | undefined = undefined;

    for (var i = 0; i < MessagesWithSeen.length; i++) {
      let date: any = MessagesWithSeen[i].createdOn;
      if (
        MessagesWithSeen[i].isSeen &&
        MessagesWithSeen[i].sender.communicationUserId === state.contosoClient.user.identity &&
        MessagesWithSeen[i] &&
        new Date(date) >= new Date(latestArrivalTime)
      ) {
        latestArrivalTime = MessagesWithSeen[i].createdOn;
        latestMessageId = MessagesWithSeen[i].clientMessageId;
      }
    }

    if (clientMessageId !== latestMessageId || latestMessageId === undefined) {
      return false;
    }

    return true;
  }
});

const mapDispatchToProps = (dispatch: any) => ({
  sendReadReceipt: (messages: any[], userId: string) => {
    // if you have no messages, you haven't seen any messages to send a read receipt for
    if (!messages || messages.length === 0) {
      return;
    }

    let latestArrivalTime: any = -1;
    let latestMessageId = undefined;

    for (var i = 0; i < messages.length; i++) {
      let date: any = messages[i].createdOn;
      if (messages[i].sender.communicationUserId !== userId && new Date(date) > new Date(latestArrivalTime)) {
        latestArrivalTime = messages[i].createdOn;
        latestMessageId = messages[i].id;
      }
    }
    if (latestMessageId) {
      dispatch(sendReadReceipt(latestMessageId));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatThread);
