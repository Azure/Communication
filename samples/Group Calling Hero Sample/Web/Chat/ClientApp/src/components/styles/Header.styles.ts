import { mergeStyles, IPivotStyles, getTheme } from '@fluentui/react';

const headerShadow = 'rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px, rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px';
const palette = getTheme().palette;
export const pivotItemStyles: Partial<IPivotStyles> = {
  linkIsSelected: {
    padding: 0,
    marginRight: 0,
    height: '100%',
    color: palette.themePrimary,
    selectors: {
      ':hover': { color: palette.themePrimary }
    }
  },
  link: { padding: 0, marginRight: 0, height: '3.75rem' },
  root: { width: '5.25rem', height: '3.75rem', display: 'inline-block', verticalAlign: 'top' }
};
export const pivotContainerStyle = mergeStyles({
  display: 'inline-block'
});
export const headerContainer = mergeStyles({
  width: '100%',
  height: '3.875rem',
  padding: '0.0625rem 0',
  boxShadow: headerShadow,
  overflow: 'hidden',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginBottom: 2
});
export const headerCenteredContainer = mergeStyles(headerContainer, {
  justifyContent: 'center'
});

export const separatorContainerStyle = mergeStyles({
  display: 'inline-block',
  padding: '0 1rem',
  height: '1.875rem'
});
export const pivotItemStyle = mergeStyles({
  padding: '0 0.8125rem'
});
export const separatorStyles = {
  root: {
    color: palette.neutralLight,
    width: '0.0625rem' // 1px
  }
};
