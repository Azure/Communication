import { IStackTokens, mergeStyles, getTheme } from '@fluentui/react';

const palette = getTheme().palette;
export const imgStyle = mergeStyles({
  width: '27.25rem',
  height: '20.125rem',
  selectors: {
    '@media (max-width: 67.1875rem)': {
      display: 'none'
    }
  }
});
export const containerTokens: IStackTokens = {
  childrenGap: '3.4375rem'
};
export const upperStackTokens: IStackTokens = {
  childrenGap: '2.625rem'
};
export const nestedStackTokens: IStackTokens = {
  childrenGap: '0.75rem'
};
export const listStyle = mergeStyles({
  listStyleType: 'none',
  fontSize: '0.875rem',
  margin: 0,
  padding: 0,
  listStylePosition: 'outside'
});
export const iconStyle = mergeStyles({
  marginRight: '0.4375rem',
  color: palette.themePrimary
});
export const headerStyle = mergeStyles({
  fontWeight: 600,
  fontSize: '2.25rem', // 36px
  maxWidth: '23.188rem'
});
export const videoCameraIconStyle = mergeStyles({
  marginRight: '0.375rem',
  fontSize: '1.375rem'
});
export const buttonStyle = mergeStyles({
  fontWeight: 600,
  fontSize: '0.875rem', // 14px
  width: '7.75rem',
  height: '2.5rem',
  borderRadius: 3,
  padding: '0.625rem'
});
export const upperStackStyle = mergeStyles({
  selectors: {
    '@media (max-width: 53.4375rem)': {
      padding: '0.625rem'
    }
  }
});
export const listItemStyle = mergeStyles({
  paddingLeft: '2em',
  textIndent: '-1em'
});
