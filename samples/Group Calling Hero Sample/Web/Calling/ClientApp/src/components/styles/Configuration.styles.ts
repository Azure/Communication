import { mergeStyles, IStackTokens } from '@fluentui/react';

export const configurationStackTokens: IStackTokens = {
  childrenGap: '3rem'
};
export const videoCameraIconStyle = mergeStyles({
  marginRight: '0.375rem',
  fontSize: '1.375rem'
});
export const buttonStyle = mergeStyles({
  fontWeight: 600,
  fontSize: '0.875rem', // 14px
  height: '2.75rem',
  width: '100%',
  marginTop: '2.125rem',
  maxWidth: '18.75rem',
  minWidth: '12.5rem'
});
export const mainContainerStyle = mergeStyles({
  maxWidth: '46.875rem',
  width: '100%',
  height: '100%',
  selectors: {
    '@media (max-width: 750px)': {
      padding: '0.625rem',
      height: '100%'
    }
  }
});
export const localSettingsContainerStyle = mergeStyles({
  width: '100%',
  maxWidth: '18.75rem'
});
export const fullScreenStyle = mergeStyles({
  height: '100%',
  width: '100%'
});
export const verticalStackStyle = mergeStyles({
  height: '100%',
  width: '100%',
  justifyContent: 'space-evenly'
});
export const localVideoWrapperStyle = mergeStyles({
  minWidth: '12.5rem'
});

export const inputBoxStyle = mergeStyles({
  boxSizing: 'border-box',
  height: '2.5rem',
  width: '18.75rem',
  border: '1px solid #605e5c',
  borderRadius: '2px',
  backgroundColor: '#FFFFFF'
});

export const inputBoxTextStyle = mergeStyles({
  fontSize: '0.875rem',
  fontWeight: 600,
  lineHeight: '1.5rem',
  '::-webkit-input-placeholder': {
    fontSize: '0.875rem',
    fontWeight: 600
  },
  '::-moz-placeholder': {
    fontSize: '0.875rem',
    fontWeight: 600
  },
  ':-moz-placeholder': {
    fontSize: '0.875rem',
    fontWeight: 600
  }
});

export const inputBoxWarningStyle = mergeStyles({
  boxSizing: 'border-box',
  height: '2.5rem',
  width: '18.75rem',
  border: '1px solid #e81123',
  borderRadius: '2px',
  backgroundColor: '#FFFFFF',
  fontSize: '0.875rem'
});

export const labelFontStyle = mergeStyles({
  fontSize: '0.875rem',
  fontWeight: 600,
  color: 'rgb(50, 49, 48)',
  boxSizing: 'border-box',
  boxShadow: 'none',
  margin: 0,
  display: 'inline-block',
  padding: '5px 0px',
  overflowWrap: 'break-word'
});

export const warningStyle = mergeStyles({
  width: '18.75rem',
  backgroundColor: '#FFFFFF',
  marginTop: '0.188rem',
  marginBottom: '0.188rem',
  marginLeft: '0.188rem',
  color: '#e81123',
  fontSize: '.7375rem',
  fontWeight: '400'
});
