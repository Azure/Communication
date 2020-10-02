import { Provider, teamsTheme, mergeThemes } from '@fluentui/react-northstar';
import { svgIconStyles } from '@fluentui/react-northstar/dist/es/themes/teams/components/SvgIcon/svgIconStyles';
import { svgIconVariables } from '@fluentui/react-northstar/dist/es/themes/teams/components/SvgIcon/svgIconVariables';
import * as siteVariables from '@fluentui/react-northstar/dist/es/themes/teams/siteVariables';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

const iconTheme = {
  componentStyles: {
    SvgIcon: svgIconStyles,
  },
  componentVariables: {
    SvgIcon: svgIconVariables,
  },
  siteVariables,
};

ReactDOM.render(
  <Provider theme={mergeThemes(iconTheme, teamsTheme)} className="wrapper">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    <App />
  </Provider>,
  document.getElementById('root')
);
