import { getTheme, IStackTokens, mergeStyles } from '@fluentui/react';

const palette = getTheme().palette;

const imgStyle = mergeStyles({
  width: '26.813rem',
  height: '20.125rem',
  selectors: {
    '@media (max-width: 53.438rem)': {
      display: 'none'
    }
  }
});

const containerTokens: IStackTokens = {
  childrenGap: 55
};

const upperStackTokens: IStackTokens = {
  childrenGap: 42
};

const nestedStackTokens: IStackTokens = {
  childrenGap: 12
};

const listStyle = mergeStyles({
  listStyleType: 'none',
  paddingLeft: '0px',
  fontSize: '0.875rem' // 14px
});

const iconStyle = mergeStyles({
  marginRight: 7,
  color: palette.themePrimary
});

const headerStyle = mergeStyles({
  fontWeight: 600,
  fontSize: '2.25rem', // 36px
  maxWidth: '23.188rem'
});

const videoCameraIconStyle = mergeStyles({
  marginRight: '0.375rem',
  fontSize: '1.375rem' // 22px
});

const buttonStyle = mergeStyles({
  fontWeight: 600,
  fontSize: '0.875rem', // 14px
  width: 'fit-content',
  height: '2.5rem',
  borderRadius: 3,
  selectors: {
    '@media (max-width: 53.438rem)': {
      padding: '0.625rem'
    }
  }
});

const upperStackStyle = mergeStyles({
  selectors: {
    '@media (max-width: 53.438rem)': {
      padding: '0.625'
    }
  }
});

const moreInfoStyle = mergeStyles({
  color: '#303030',
  opacity: 0.8,
  marginTop: '0.625rem',
  fontSize: '0.75rem', // 12px
  fontWeight: 400
});

const startChatTextStyle = mergeStyles({
  fontSize: '0.875rem' // 14px
});

export {
  imgStyle,
  containerTokens,
  upperStackTokens,
  nestedStackTokens,
  listStyle,
  iconStyle,
  headerStyle,
  videoCameraIconStyle,
  buttonStyle,
  upperStackStyle,
  moreInfoStyle,
  startChatTextStyle
};
