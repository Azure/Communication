import { mergeStyles } from '@fluentui/react';

const chatScreenContainerStyle = mergeStyles({
  height: '100%',
  width: '100%'
});

const chatScreenBottomContainerStyle = mergeStyles({
  height: '100%',
  width: '100%',
  maxHeight: '100%',
  overflow: 'auto'
});

export { chatScreenContainerStyle, chatScreenBottomContainerStyle };
