import { IStackTokens, mergeStyles } from '@fluentui/react';

const mainStackTokens: IStackTokens = {
  childrenGap: 44
};

const buttonsStackTokens: IStackTokens = {
  childrenGap: 12
};

const upperStackTokens: IStackTokens = {
  childrenGap: 24
};
const endCallContainerStyle = mergeStyles({
  width: 330
});

const endCallTitleStyle = mergeStyles({
  fontWeight: 600,
  fontSize: '1.375rem' // 22px
});

const buttonStyle = mergeStyles({
  fontWeight: 600,
  height: '2.5rem',
  width: '9.875rem',
  fontSize: '0.875rem', // 14px
  padding: 0
});

const videoCameraIconStyle = mergeStyles({
  marginRight: '0.375rem',
  fontSize: '1.375rem' // 22px
});

const bottomStackFooterStyle = mergeStyles({
  color: 'rgb(0,0,0)',
  fontSize: '0.875rem' // 14px
});

const buttonTextStyle = mergeStyles({
  fontSize: '0.875rem' // 14px
});

export {
  mainStackTokens,
  buttonsStackTokens,
  upperStackTokens,
  endCallContainerStyle,
  endCallTitleStyle,
  buttonStyle,
  videoCameraIconStyle,
  bottomStackFooterStyle,
  buttonTextStyle
};
