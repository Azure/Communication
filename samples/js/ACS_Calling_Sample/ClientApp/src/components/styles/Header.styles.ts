import { mergeStyles, IPivotStyles, getTheme } from '@fluentui/react';

const headerShadow = 'rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px, rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px';
const palette = getTheme().palette;
export const pivotItemStyles: Partial<IPivotStyles> = {
  linkIsSelected: {
    padding: 0,
    marginRight: 0,
    height: 60,
    color: palette.themePrimary,
    selectors: {
      ':hover': { color: palette.themePrimary }
    }
  },
  link: { padding: 0, marginRight: 0, height: 60 },
  root: { width: 84, height: 60, display: 'inline-block', verticalAlign: 'top' }
};
export const pivotContainerStyle = mergeStyles({
  display: 'inline-block'
});
export const headerContainer = mergeStyles({
  width: '100%',
  height: 60,
  boxShadow: headerShadow,
  overflow: 'hidden',
  flexDirection: 'row-reverse'
});
export const headerCenteredContainer = mergeStyles(headerContainer, {
  justifyContent: 'center'
});
export const mediaControlsContainer = mergeStyles({
  margin: '7px 0px 5px 0px',
  display: 'inline-block',
  verticalAlign: 'top'
});
export const separatorContainerStyle = mergeStyles({
  display: 'inline-block',
  verticalAlign: 'top',
  padding: '16px 16px 16px 10px',
  height: '100%'
});
export const pivotItemStyle = mergeStyles({
  padding: '0px 13px'
});
export const separatorStyles = {
  root: {
    color: palette.neutralLight,
    width: 1
  }
};
