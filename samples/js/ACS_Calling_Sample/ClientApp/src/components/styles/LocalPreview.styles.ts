import { IToggleStyles, IStackTokens, mergeStyles, IImageStyles, getTheme } from '@fluentui/react';

const palette = getTheme().palette;
export const toggleStyle: Partial<IToggleStyles> = {
  root: { marginBottom: 0 }
};
export const imgStyles: Partial<IImageStyles> = {
  root: { width: 160, height: 168 }
};
export const toggleButtonsBarToken: IStackTokens = {
  childrenGap: 10,
  padding: 10
};
export const localPreviewContainerStyle = mergeStyles({
  maxWidth: 400,
  minWidth: 200,
  width: '100%',
  height: '100%',
  maxHeight: 300,
  minHeight: 200,
  background: palette.neutralLighter,
  color: palette.neutralPrimaryAlt
});
export const toggleButtonsBarStyle = mergeStyles({
  height: 45,
  width: '100%',
  backgroundColor: palette.neutralQuaternaryAlt
});
export const localPreviewStyle = mergeStyles({
  width: '100%',
  height: '100%',
  maxHeight: 255,
  transform: 'rotateY(180deg)'
});
