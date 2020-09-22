import { loadTheme, initializeIcons } from '@fluentui/react';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import ChatScreen from './containers/ChatScreen';
import ConfigurationScreen from './containers/ConfigurationScreen';
import EndScreen from './containers/EndScreen';
import ErrorScreen from './components/ErrorScreen';
import HomeScreen from './containers/HomeScreen';
import { reducer } from './core/reducers/index';
import { getBuildTime, getChatSDKVersion, getThreadId } from './utils/utils';

console.info(
  `Thread chat sample using @azure/communication-chat : ${getChatSDKVersion()}`
);
console.info(`Build Date : ${getBuildTime()}`);

loadTheme({});
initializeIcons();

const store = createStore(reducer, applyMiddleware(thunk));

export default (): JSX.Element => {
  const [page, setPage] = useState('home');

  const getComponent = () => {
    if (page === 'home') {
      return <HomeScreen />;
    } else if (page === 'configuration') {
      return (
        <ConfigurationScreen
          joinChatHandler={() => {
            setPage('chat');
          }}
        />
      );
    } else if (page === 'chat') {
      return (
        <ChatScreen
          endChatHandler={() => {
            setPage('end');
            // Send up signal that the user wants to leave the chat
            // Move to to next screen on success
          }}
          errorHandler={() => {
            setPage('error');
          }}
        />
      );
    } else if (page === 'end') {
      return (
        <EndScreen
          rejoinHandler={() => {
            setPage('chat'); // use store information to attempt to rejoin the chat thread
          }}
          homeHandler={() => {
            window.location.href = window.location.origin;
          }}
        />
      );
    } else if (page === 'error') {
      return (
        <ErrorScreen
          homeHandler={() => {
            window.location.href = window.location.origin;
          }}
        />
      );
    }
  };

  if (getThreadId() && page === 'home') {
    setPage('configuration');
  }

  return <Provider store={store}>{getComponent()}</Provider>;
};
