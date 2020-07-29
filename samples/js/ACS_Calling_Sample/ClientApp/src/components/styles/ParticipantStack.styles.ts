import { mergeStyles, IStackTokens, IPersonaStyles, IButtonStyles } from '@fluentui/react';

const BLACK = '#000000';
export const itemStyles: Partial<IPersonaStyles> = {
  root: {
    minWidth: 0,
    padding: '0 4px',
    alignSelf: 'stretch',
    height: 'auto',
    width: 200
  },
  primaryText: {
    color: BLACK
  }
};
export const overFlowButtonStyles: IButtonStyles = {
  root: {
    minWidth: 0,
    padding: '0 4px',
    alignSelf: 'stretch',
    height: 'auto'
  }
};
export const participantStackStyle = mergeStyles({
  maxHeight: 350,
  overflow: 'auto',
  paddingLeft: 18,
  paddingRight: 18
});
export const iconStyle = mergeStyles({
  margin: 7,
  fontSize: 16
});
export const participantStackTokens: IStackTokens = {
  childrenGap: 10,
  padding: 10
};
