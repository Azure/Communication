import { mergeStyles } from '@fluentui/react';

const textFieldStyle = mergeStyles({
  width: '100%',
  height: '2.25rem'
});

const TextFieldStyleProps = {
  wrapper: {
    height: '2.25rem'
  },
  fieldGroup: {
    height: '2.25rem'
  }
};
const sendBoxStyle = mergeStyles({
  border: '0rem', // 0px
  color: 'black',
  backgroundColor: '#EEF2F5',
  fontWeight: 400,
  fontSize: '1rem', // 16px
  width: '100%',
  height: '2.25rem',
  '::-webkit-input-placeholder': {
    fontSize: '1rem'
  },
  '::-moz-placeholder': {
    fontSize: '1rem'
  },
  ':-moz-placeholder': {
    fontSize: '1rem'
  }
});

const sendIconStyle = mergeStyles({
  backgroundColor: '#EEF2F5',
  width: '2.25rem',
  height: '2.25rem',
  color: 'grey',
  paddingLeft: '0.5rem',
  paddingTop: '0.625rem',
  fontSize: '0.875rem' // 14px
});

export { textFieldStyle, sendBoxStyle, sendIconStyle, TextFieldStyleProps };
