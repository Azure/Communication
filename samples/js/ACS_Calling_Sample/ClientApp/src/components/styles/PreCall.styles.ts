import { mergeStyles, IStackTokens } from '@fluentui/react';

export const preCallStackTokens: IStackTokens = {
  childrenGap: 48
};
export const localSettingsStackTokens: IStackTokens = {
  childrenGap: 62
};
export const videoCameraIconStyle = mergeStyles({
  marginRight: 6,
  fontSize: 22
});
export const buttonStyle = mergeStyles({
  height: 44,
  width: '100%',
  maxWidth: 300,
  minWidth: 200
});
export const mainContainerStyle = mergeStyles({
  maxWidth: 750,
  width: '100%',
  height: '100%',
  selectors: {
    '@media (max-width: 750px)': {
      padding: 10,
      height: '100%'
    }
  }
});
export const localSettingsContainerStyle = mergeStyles({
  width: '100%',
  maxWidth: 300
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
  minWidth: 200
});
