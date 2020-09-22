import { mergeStyles, getTheme } from '@fluentui/react';

const MODERATE_RED = '#d74654';
const palette = getTheme().palette;
export const mediaControlStyles = mergeStyles({
  height: '3.75rem',
  padding: '0 0.8125rem',
  display: 'inline-block',
  borderRadius: 7,
  overflow: 'hidden'
});
export const controlButtonStyle = mergeStyles({
  backgroundColor: palette.white,
  width: '2rem',
  height: '3.75rem',
  border: '0.125rem',
  borderRadius: 2,
  marginRight: '0.4375rem',
  color: palette.neutralSecondary
});
export const controlButtonDisabledStyle = mergeStyles(controlButtonStyle, {
  color: palette.neutralLight
});
export const endCallButtonStyle = mergeStyles({
  backgroundColor: MODERATE_RED,
  width: '6.5625rem',
  height: '2.1875rem',
  border: '0.125rem',
  marginRight: '0.75rem',
  marginLeft: '0.75rem',
  borderRadius: 2,
  color: palette.white,
  selectors: {
    ':focus': { color: palette.white },
    ':hover': { color: palette.white },
    ':active': { color: palette.white }
  }
});
export const endCallButtonTextStyle = mergeStyles({
  color: palette.white,
  padding: '0.3125rem',
  fontSize: '0.875rem',
  lineHeight: '3.75rem'
});
export const fullWidth = mergeStyles({
  width: '100%'
});
