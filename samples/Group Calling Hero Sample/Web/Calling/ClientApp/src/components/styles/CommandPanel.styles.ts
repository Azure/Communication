import { IStackStyles, mergeStyles, ITextFieldStyles, IStackTokens, getTheme } from '@fluentui/react';

const palette = getTheme().palette;
export const fullHeightStyles: IStackStyles = {
  root: {
    height: '100%',
    overflowY: 'auto'
  }
};
export const paneFooterStyles: IStackStyles = {
  root: {
    marginBottom: '1.25rem'
  }
};
export const paneFooterTokens: IStackTokens = {
  childrenGap: '0.3125rem'
};
export const textFieldStyles: Partial<ITextFieldStyles> = {
  field: {
    color: palette.neutralSecondary,
    padding: 0
  },
  root: {
    marginLeft: '1rem',
    marginRight: '1rem'
  },
  fieldGroup: {
    border: 'none'
  }
};

export const paneHeaderStyle = mergeStyles({
  height: '4.3125rem'
});

export const paneHeaderTextStyle = mergeStyles({
  fontSize: '1.375rem',
  fontWeight: 600,
  width: '69px',
  float: 'left',
  margin: '20px'
});
export const footerMainTextStyle = mergeStyles({
  fontWeight: 600,
  fontSize: '1rem',
  marginLeft: '1rem',
  marginRight: '1rem'
});
export const copyLinkButtonStyle = mergeStyles({
  fontWeight: 600,
  fontSize: '0.875rem', // 14px
  height: '2.5rem',
  marginLeft: '1rem',
  marginRight: '1rem',
  width: '90%'
});
export const copyIconStyle = mergeStyles({
  marginRight: '0.5em'
});
export const settingsContainerStyle = mergeStyles({
  marginLeft: '1.25rem',
  width: '15.375rem'
});
