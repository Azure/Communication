import { IStackTokens, mergeStyles, getTheme } from '@fluentui/react';

const palette = getTheme().palette;
export const mainStackTokens: IStackTokens = {
  childrenGap: 44
};
export const buttonsStackTokens: IStackTokens = {
  childrenGap: 12
};
export const upperStackTokens: IStackTokens = {
  childrenGap: 24
};
export const bottomStackTokens: IStackTokens = {
  childrenGap: 23
};
export const endCallContainerStyle = mergeStyles({
  width: 330
});
export const endCallTitleStyle = mergeStyles({
  fontFamily: 'Segoe UI Semibold',
  fontSize: 22
});
export const buttonStyle = mergeStyles({
  height: 40,
  width: 158,
  fontSize: 16,
  padding: 0
});
export const videoCameraIconStyle = mergeStyles({
  marginRight: 6,
  fontSize: 22
});
export const surveyQuestionStyle = mergeStyles({
  fontSize: 22,
  width: 326
});
export const bottomStackfooterStyle = mergeStyles({
  color: palette.neutralTertiary,
  fontSize: 14
});
export const emojiStyle = mergeStyles({
  width: 64,
  height: 64,
  marginRight: 8,
  backgroundColor: palette.neutralLighter,
  fontFamily: 'Apple Color Emoji Regular',
  fontSize: 21,
  padding: 21
});
