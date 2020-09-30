import { mergeStyles } from '@fluentui/react';

const TypingIndicatorContainerStyle = mergeStyles({
  height: '2.125rem',
  display: 'flex',
  alignItems: 'center'
});

const TypingIndicatorListStyle = mergeStyles({
  fontWeight: 400,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  paddingRight: '0.1875rem'
});

const TypingIndicatorVerbStyle = mergeStyles({
  fontWeight: 400,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  paddingRight: '0.1875rem'
});

export { TypingIndicatorContainerStyle, TypingIndicatorListStyle, TypingIndicatorVerbStyle };
