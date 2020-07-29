import { mergeStyles, getTheme } from '@fluentui/react';

const palette = getTheme().palette;
export const videoHint = mergeStyles({
  backgroundColor: palette.neutralSecondary,
  bottom: '5%',
  height: 28,
  boxShadow: '0 0 1px 0 rgba(0,0,0,.16)',
  color: palette.neutralLighter,
  fontSize: 20,
  lineHeight: 17,
  textAlign: 'left',
  left: '2%',
  overflow: 'hidden',
  position: 'absolute',
  padding: 4,
  whiteSpace: 'nowrap',
  maxWidth: '40%',
  borderRadius: 4
});
export const staticMediaContainer = mergeStyles({
  position: 'relative',
  height: '100%',
  width: '100%'
});
