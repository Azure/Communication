import { IStackTokens, IStackItemStyles, IStackStyles, getTheme } from '@fluentui/react';

const palette = getTheme().palette;
export const childTokens: IStackTokens = {
  childrenGap: 3
};
export const headerStyles: IStackItemStyles = {
  root: {
    width: '100%'
  }
};
export const containerStyles: IStackStyles = {
  root: {
    height: '100%',
    minHeight: 150,
    width: '100%'
  }
};
export const paneStyles: IStackItemStyles = {
  root: {
    width: 286
  }
};
export const hiddenContainerClassName: IStackItemStyles = {
  root: {
    border: `solid 1px ${palette.neutralLighterAlt}`,
    height: '100%',
    display: 'none'
  }
};
export const activeContainerClassName: IStackItemStyles = {
  root: {
    border: `solid 1px ${palette.neutralLighterAlt}`,
    height: 'calc(100% - 3px)',
    display: 'initial'
  }
};
