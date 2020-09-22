import { mergeStyles, IStackTokens, IPersonaStyles, IButtonStyles } from '@fluentui/react';

const BLACK = '#000000';
export const itemStyles: Partial<IPersonaStyles> = {
  root: {
    minWidth: 0,
    padding: '0 0.25rem',
    alignSelf: 'stretch',
    height: 'auto',
    width: '12.5rem'
  },
  primaryText: {
    color: BLACK
  }
};
export const overFlowButtonStyles: IButtonStyles = {
  root: {
    minWidth: 0,
    padding: '0 0.25rem',
    alignSelf: 'stretch',
    height: 'auto'
  }
};
export const participantStackStyle = mergeStyles({
  maxHeight: '21.875rem',
  overflow: 'auto',
  paddingLeft: '1.125rem',
  paddingRight: '1.125rem'
});
export const iconStyle = mergeStyles({
  margin: '0.4375rem',
  fontSize: '1rem'
});
export const participantStackTokens: IStackTokens = {
  childrenGap: '0.625rem',
  padding: '0.625rem'
};
