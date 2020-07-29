import { mergeStyles, getTheme } from '@fluentui/react';

const palette = getTheme().palette;
export const fullScreenStyle = mergeStyles({
  padding: '0.5em',
  borderRight: '1px solid rgba(0,0,0,0.05)',
  height: '100%',
  width: '100%',
  background: palette.neutralLighterAlt
});
