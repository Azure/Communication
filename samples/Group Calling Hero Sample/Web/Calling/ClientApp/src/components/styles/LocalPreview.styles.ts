import { IToggleStyles, IStackTokens, mergeStyles, IImageStyles, getTheme } from '@fluentui/react';

const palette = getTheme().palette;
export const toggleStyle: Partial<IToggleStyles> = {
  root: { marginBottom: 0 }
};
export const imgStyles: Partial<IImageStyles> = {
  root: { width: '10rem', height: '10.5rem' }
};
export const toggleButtonsBarToken: IStackTokens = {
  childrenGap: '0.625rem',
  padding: '0.625rem'
};
export const localPreviewContainerStyle = mergeStyles({
  maxWidth: '25rem',
  minWidth: '12.5rem',
  width: '100%',
  height: '100%',
  maxHeight: '18.75rem',
  minHeight: '12.5rem',
  background: palette.neutralLighter,
  color: palette.neutralPrimaryAlt
});
export const toggleButtonsBarStyle = mergeStyles({
  height: '2.8125rem',
  width: '100%',
  backgroundColor: palette.neutralQuaternaryAlt
});
export const localPreviewStyle = mergeStyles({
  width: '100%',
  height: '100%',
  maxHeight: '15.9375rem',
  transform: 'rotateY(180deg)'
});
