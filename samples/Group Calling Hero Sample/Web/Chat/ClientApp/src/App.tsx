// © Microsoft Corporation. All rights reserved.
import React, { useState, useEffect } from 'react';
import GroupCall from './containers/GroupCall';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './core/reducers';
import thunk from 'redux-thunk';
import EndCall from './components/EndCall';
import HomeScreen from './components/HomeScreen';
import ConfigurationScreen from './containers/Configuration';
import { v1 as createGUID } from 'uuid';
import { loadTheme, initializeIcons } from '@fluentui/react';
import { utils } from './Utils/Utils';

const sdkVersion = require('../package.json').dependencies['@azure/communication-calling'];
const lastUpdated = `Last Updated ${utils.getBuildTime()} with @azure/communication-calling:${sdkVersion}`;

loadTheme({});
initializeIcons();

const store = createStore(reducer, applyMiddleware(thunk));
const App = () => {
  const [page, setPage] = useState('home');
  const [groupId, setGroupId] = useState('');
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const setWindowWidth = () => {
      const width = typeof window !== 'undefined' ? window.innerWidth : 0;
      setScreenWidth(width);
    };
    setWindowWidth();
    window.addEventListener('resize', setWindowWidth);
    return () => window.removeEventListener('resize', setWindowWidth);
  }, []);

  const createUserId = () => 'user' + Math.ceil(Math.random() * 1000);

  const getGroupIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('groupId');
  };

  const getGroupId = () => {
    if (groupId) return groupId;
    const uri_gid = getGroupIdFromUrl();
    const gid = uri_gid == null || uri_gid === '' ? createGUID() : uri_gid;
    console.log('The group id is ' + gid);
    setGroupId(gid);
    return gid;
  };

  const getContent = () => {
    if (page === 'home') {
      return (
        <HomeScreen
          startCallHandler={() => {
            window.history.pushState({}, document.title, window.location.href + '?groupId=' + getGroupId());
          }}
        />
      );
    } else if (page === 'configuration') {
      return (
        <ConfigurationScreen
          startCallHandler={() => setPage('call')}
          unsupportedStateHandler={() => setPage('error')}
          endCallHandler={() => setPage('endCall')}
          groupId={getGroupId()}
          userId={createUserId()}
          screenWidth={screenWidth}
        />
      );
    } else if (page === 'call') {
      return (
        <GroupCall
          endCallHandler={() => setPage('endCall')}
          groupId={getGroupId()}
          userId={createUserId()}
          screenWidth={screenWidth}
        />
      );
    } else if (page === 'endCall') {
      return (
        <EndCall
          rejoinHandler={() => {
            setPage('call');
          }}
          homeHandler={() => {
            window.location.href = window.location.href.split('?')[0];
          }}
        />
      );
    } else {
      // page === 'error'
      window.document.title = 'Unsupported browser';
      return (
        <>
          <a href="https://aka.ms/ACS-CallingSupport#calling-client-library-browser-support">Learn more</a>&nbsp;about
          browsers and platforms supported by the web calling sdk
        </>
      );
    }
  };

  if (getGroupIdFromUrl() && page === 'home') {
    setPage('configuration');
  }

  if (utils.isMobileSession() || utils.isSmallScreen()) {
    console.log('ACS Calling sample: This is experimental behaviour');
  }

  return <Provider store={store}>{getContent()}</Provider>;
};

window.setTimeout(() => {
  try {
    console.log(`ACS sample group calling app: ${lastUpdated}`);
  } catch (e) {}
}, 0);

export default App;
