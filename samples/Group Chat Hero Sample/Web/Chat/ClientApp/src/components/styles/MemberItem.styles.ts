import { mergeStyles } from '@fluentui/react';

const memberItemContainerStyle = mergeStyles({
  marginLeft: '1rem',
  marginRight: '0.5rem',
  marginTop: '0.125rem',
  marginBottom: '0.125rem',
  display: 'flex',
  position: 'relative'
});

const memberItemNameStyle = mergeStyles({
  fontSize: '0.875rem', // 14px
  fontWeight: 400,
  marginTop: '0.3125rem',
  marginRight: '0.25rem',
  paddingLeft: '0.25rem',
  overflowY: 'hidden'
});

const memberItemIsYouStyle = mergeStyles({
  fontSize: '0.875rem', // 14px
  fontWeight: 400,
  color: '#A19F9D',
  marginTop: '0.3125rem',
  marginLeft: '0.3125rem'
});

const moreInforStyle = mergeStyles({
  position: 'absolute',
  right: '1rem'
});

export { memberItemContainerStyle, memberItemNameStyle, memberItemIsYouStyle, moreInforStyle };
