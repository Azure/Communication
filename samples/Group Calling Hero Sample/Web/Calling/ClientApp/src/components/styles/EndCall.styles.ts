import { IStackTokens, mergeStyles } from '@fluentui/react';

export const mainStackTokens: IStackTokens = {
  childrenGap: '0.25rem'
};
export const buttonsStackTokens: IStackTokens = {
  childrenGap: '0.75rem'
};
export const upperStackTokens: IStackTokens = {
  childrenGap: '1.5rem'
};
export const bottomStackTokens: IStackTokens = {
  childrenGap: '1.4375rem'
};
export const endCallContainerStyle = mergeStyles({
  width: '20.625rem'
});
export const endCallTitleStyle = mergeStyles({
  fontSize: '1.375rem',
  fontWeight: 600
});
export const buttonStyle = mergeStyles({
  fontWeight: 600,
  height: '2.5rem',
  width: '9.875rem',
  fontSize: '0.875rem', // 14px
  padding: 0
});
export const videoCameraIconStyle = mergeStyles({
  marginRight: '0.375rem',
  fontSize: '1.375rem'
});
export const bottomStackFooterStyle = mergeStyles({
  color: 'rgb(0,0,0)',
  fontSize: '0.875 rem'
});
