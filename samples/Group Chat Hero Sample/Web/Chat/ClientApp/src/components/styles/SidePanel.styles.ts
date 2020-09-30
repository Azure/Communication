import { getTheme, IStackTokens, IStackStyles, ITextFieldStyles, mergeStyles } from '@fluentui/react';

const palette = getTheme().palette;

const paneFooterTokens: IStackTokens = {
  childrenGap: 5
};

const textFieldStyles: Partial<ITextFieldStyles> = {
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

const footerMainTextStyle = mergeStyles({
  fontSize: '1rem', // 16px
  fontWeight: 600,
  marginLeft: '1rem',
  marginRight: '1rem',
  marginTop: '1rem'
});

const copyLinkButtonStyle = mergeStyles({
  fontWeight: 600,
  height: '2.5rem',
  marginLeft: '1rem',
  marginRight: '1rem',
  width: '90%'
});

const copyIconStyle = mergeStyles({
  marginRight: '0.5em',
  fontSize: '0.875rem' // 14px
});

const copyLinkTextStyle = mergeStyles({
  fontSize: '1rem'
});

const sidePanelContainerStyle = (showSidePanel: boolean) =>
  mergeStyles({
    height: '100%',
    width: '17.813rem', // 285px
    display: showSidePanel ? 'flex' : 'none',
    borderLeft: '0.063rem solid #DDDDDD'
  });

const titleStyle = mergeStyles({
  marginLeft: '1rem',
  marginTop: '1rem',
  fontSize: '1rem', // 16px
  height: '1.375rem',
  marginBottom: '1.25rem',
  fontWeight: 600
});

const memberListStyle = mergeStyles({
  height: '100%',
  width: '100%',
  maxHeight: '100%',
  overflow: 'auto'
});

const settingsListStyle = mergeStyles({
  height: '100%',
  width: '100%',
  maxHeight: '100%'
});

const textFieldIconStyle = mergeStyles({
  marginRight: '0.5em',
  fontSize: '0.875rem' // 14px
});

const chatNameTextFieldStyle: Partial<ITextFieldStyles> = {
  field: {
    width: '100%',
    height: '100%'
  },
  root: {
    marginLeft: '1rem',
    marginRight: '1rem'
  },
  fieldGroup: {
    borderColor: '#CCCCCC',
    borderRadius: '0.188rem',
    height: '2.25rem',
    paddingBottom: '0.25rem'
  },
  subComponentStyles: {
    label: {
      root: {} && {
        fontSize: '0.875rem' // 14px
      }
    }
  }
};

const chatNameTextWarningFieldStyle: Partial<ITextFieldStyles> = {
  field: {
    width: '100%',
    height: '100%'
  },
  root: {
    marginLeft: '1rem',
    marginRight: '1rem'
  },
  fieldGroup: {
    borderColor: '#FF0000',
    borderRadius: '0.188rem',
    height: '2.25rem',
    paddingBottom: '0.25rem'
  },
  subComponentStyles: {
    label: {
      root: {} && {
        fontSize: '0.875rem' // 14px
      }
    }
  }
};

const saveChatNameButtonStyle = mergeStyles({
  fontWeight: 600,
  height: '2.5rem',
  marginLeft: '1rem',
  paddingRight: '1rem',
  width: '90%'
});

const giveFeedbackSectionStyle = mergeStyles({
  bottom: '1rem',
  minHeight: '7.25rem',
  borderTop: '0.063rem solid #DDDDDD'
});

const giveFeedbackBottomStyle = mergeStyles({
  border: '1px solid #CCCCCC',
  borderRadius: '2px',
  fontWeight: 600,
  height: '2.5rem',
  marginLeft: '1rem',
  marginRight: '1rem',
  marginTop: '1rem',
  width: '90%'
});

const giveFeedbackIconStyle = mergeStyles({
  marginRight: '0.5rem'
});

const appInformationStyle = mergeStyles({
  paddingLeft: '1rem',
  paddingTop: '0.625rem',
  color: '#605E5C'
});

const inviteFooterStackContainerStyles = mergeStyles({
  minHeight: '7.25rem',
  borderTop: '0.063rem solid #DDDDDD'
});

const inviteFooterStackStyles: IStackStyles = {
  root: {
    marginBottom: '1.25rem'
  }
};

const topicWarningStyle = mergeStyles({
  height: '1.75rem',
  backgroundColor: '#FFFFFF',
  color: 'red',
  fontSize: '0.75rem',
  paddingLeft: '1rem',
  paddingBottom: '0.5rem'
});

const emptyWarningStyle = mergeStyles({
  height: '1.75rem',
  paddingBottom: '1.75rem'
});

const saveButtonTextStyle = mergeStyles({
  fontSize: '0.875rem' // 14px
});

const groupNameStyle = mergeStyles({
  fontSize: '0.875rem',
  fontWeight: 600,
  marginTop: '0.5rem',
  marginLeft: '1rem',
});

const groupNameInputBoxStyle = mergeStyles({
  boxSizing: 'border-box',
  height: '2.5rem',
  width: '90%',
  border: '0.125rem solid #CCCCCC',
  borderRadius: '0.188rem',
  backgroundColor: '#FFFFFF',
  marginTop: '0.375rem',
  marginBottom: '0.25rem',
  marginLeft: '1rem',
  fontSize: '1rem'
});

const groupNameInputBoxWarningStyle = mergeStyles({
  boxSizing: 'border-box',
  height: '2.5rem',
  width: '90%',
  border: '0.125rem solid #FF0000',
  borderRadius: '0.188rem',
  backgroundColor: '#FFFFFF',
  marginTop: '0.375rem',
  marginBottom: '0.25rem',
  marginLeft: '1rem',
  fontSize: '1rem'
});

export {
  sidePanelContainerStyle,
  titleStyle,
  memberListStyle,
  settingsListStyle,
  textFieldIconStyle,
  chatNameTextFieldStyle,
  chatNameTextWarningFieldStyle,
  saveChatNameButtonStyle,
  giveFeedbackSectionStyle,
  giveFeedbackBottomStyle,
  giveFeedbackIconStyle,
  appInformationStyle,
  inviteFooterStackContainerStyles,
  inviteFooterStackStyles,
  paneFooterTokens,
  textFieldStyles,
  footerMainTextStyle,
  copyLinkButtonStyle,
  copyIconStyle,
  copyLinkTextStyle,
  topicWarningStyle,
  emptyWarningStyle,
  saveButtonTextStyle,
  groupNameStyle,
  groupNameInputBoxStyle,
  groupNameInputBoxWarningStyle
};
