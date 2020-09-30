import { mergeStyles } from '@fluentui/react';

const ChatSystemMessageContainerStyle = (hasWarning: boolean) =>
  mergeStyles({
    height: hasWarning ? '1.25rem' : '2.5rem',
    display: 'flex',
    alignItems: 'center'
  });

const ChatSystemMessageTextStyle = mergeStyles({
  fontWeight: 400,
  whiteSpace: 'nowrap',
  color: 'red'
});

export { ChatSystemMessageContainerStyle, ChatSystemMessageTextStyle };
