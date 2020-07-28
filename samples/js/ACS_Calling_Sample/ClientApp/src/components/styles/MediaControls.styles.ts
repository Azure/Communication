import { mergeStyles, getTheme } from '@fluentui/react';

const MODERATE_RED = '#d74654';
const palette = getTheme().palette;
export const mediaControlStyles = mergeStyles({
  height: 45,
  paddingTop: 5,
  display: 'inline-block',
  borderRadius: 7,
  overflow: 'hidden'
});
export const controlButtonStyle = mergeStyles({
  backgroundColor: palette.white,
  width: 32,
  height: 35,
  border: '2px',
  borderRadius: 2,
  marginRight: 7,
  color: palette.neutralSecondary
});
export const controlButtonDisabledStyle = mergeStyles(controlButtonStyle, {
  color: palette.neutralLight
});
export const endCallButtonStyle = mergeStyles({
  backgroundColor: MODERATE_RED,
  width: 105,
  height: 35,
  border: '2px',
  marginRight: 12,
  marginLeft: 12,
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
  padding: 5
});
export const fullWidth = mergeStyles({
  width: '100%'
});
