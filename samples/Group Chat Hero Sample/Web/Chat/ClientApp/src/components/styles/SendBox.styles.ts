import { mergeStyles } from '@fluentui/react';

const textFieldStyle = mergeStyles({
  width: '100%',
  height: '2.25rem',
});

const sendBoxStyle = mergeStyles({
  border: '0rem', // 0px
  color: 'black',
  backgroundColor: '#EEF2F5',
  fontWeight: 400,
  fontSize: '0.75rem', // 12px
  width: '100%',
  height: '2.25rem',
});

const sendIconStyle = mergeStyles({
  backgroundColor: '#EEF2F5',
  width: '2.25rem',
  height: '2.25rem',
  color: 'grey',
  paddingLeft: '0.5rem',
  paddingTop: '0.625rem',
});

export { textFieldStyle, sendBoxStyle, sendIconStyle };
