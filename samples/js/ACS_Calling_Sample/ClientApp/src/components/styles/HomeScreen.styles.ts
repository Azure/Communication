import { IStackTokens, mergeStyles, getTheme } from '@fluentui/react';

const palette = getTheme().palette;
export const imgStyle = mergeStyles({
  width: 429,
  height: 322,
  selectors: {
    '@media (max-width: 855px)': {
      display: 'none'
    }
  }
});
export const containerTokens: IStackTokens = {
  childrenGap: 55
};
export const upperStackTokens: IStackTokens = {
  childrenGap: 42
};
export const nestedStackTokens: IStackTokens = {
  childrenGap: 12
};
export const listStyle = mergeStyles({
  listStyleType: 'none',
  fontSize: 14
});
export const iconStyle = mergeStyles({
  marginRight: 7,
  color: palette.themePrimary
});
export const headerStyle = mergeStyles({
  fontFamily: 'Segoe UI Semibold',
  fontSize: 36,
  maxWidth: 371
});
export const videoCameraIconStyle = mergeStyles({
  marginRight: 6,
  fontSize: 22
});
export const buttonStyle = mergeStyles({
  fontFamily: 'Segoe UI Semibold',
  fontSize: 14,
  width: 124,
  height: 40,
  borderRadius: 3,
  selectors: {
    '@media (max-width: 855px)': {
      padding: 10
    }
  }
});
export const upperStackStyle = mergeStyles({
  selectors: {
    '@media (max-width: 855px)': {
      padding: 10
    }
  }
});
