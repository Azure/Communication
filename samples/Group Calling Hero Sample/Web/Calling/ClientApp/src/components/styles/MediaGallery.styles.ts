import { mergeStyles, getTheme } from '@fluentui/react';

const palette = getTheme().palette;
export const mediaGalleryStyle = mergeStyles({
  padding: '0.4375rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 0,
  borderRight: '1px solid rgba(0,0,0,0.05)',
  borderBottom: '1px solid rgba(0,0,0,0.05)'
});
export const mediaGalleryGridStyle = mergeStyles({
  height: '100%',
  background: palette.neutralLighterAlt,
  display: 'grid'
});
