import { IStackStyles, mergeStyles, ITextFieldStyles, IStackTokens, getTheme } from '@fluentui/react';

const palette = getTheme().palette;
export const fullHeightStyles: IStackStyles = {
  root: {
    height: '100%'
  }
};
export const paneFooterStyles: IStackStyles = {
  root: {
    marginBottom: 20
  }
};
export const paneFooterTokens: IStackTokens = {
  childrenGap: 5
};
export const textFieldStyles: Partial<ITextFieldStyles> = {
  field: {
    color: palette.neutralSecondary,
    padding: 0
  },
  root: {
    marginLeft: 16,
    marginRight: 16
  },
  fieldGroup: {
    border: 'none'
  }
};

export const paneHeaderStyle = mergeStyles({
  height: 69
});

export const paneHeaderTextStyle = mergeStyles({
  fontFamily: 'Segoe UI Semibold',
  fontSize: 22,
  width: '69px',
  float: 'left',
  margin: '20px'
});
export const closeButtonStyle = mergeStyles({
  padding: 0,
  margin: '24px 16px 0px 0px',
  float: 'right',
  width: 16,
  height: 16
});
export const footerMainTextStyle = mergeStyles({
  fontFamily: 'Segoe UI Semibold',
  fontSize: 16,
  marginLeft: 16,
  marginRight: 16
});
export const copyLinkButtonStyle = mergeStyles({
  fontFamily: 'Segoe UI Semibold',
  height: 40,
  marginLeft: 16,
  marginRight: 16,
  width: '90%'
});
export const copyIconStyle = mergeStyles({
  marginRight: '0.5em'
});
export const settingsContainerStyle = mergeStyles({
  marginLeft: 20,
  width: 246
});
