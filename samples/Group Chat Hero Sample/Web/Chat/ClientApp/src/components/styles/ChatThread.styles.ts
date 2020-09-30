import { mergeStyles } from '@fluentui/react';
import { ComponentSlotStyle } from '@fluentui/react-northstar';

import { getBackgroundColor } from '../../utils/utils';

const messageAvatarContainerStyle = (avatar: string) =>
  mergeStyles({
    width: '2rem',
    minWidth: '2rem',
    height: '2rem',
    backgroundColor: getBackgroundColor(avatar)?.backgroundColor,
    borderRadius: '50%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Segoe UI Regular',
    fontSize: '1rem' // 16px
  });

const chatContainerStyle = mergeStyles({
  height: '100%',
  width: '100%',
  maxHeight: '100%',
  overflow: 'auto'
});

const noReadReceiptStyle = mergeStyles({
  width: '1rem'
});

const chatStyle: ComponentSlotStyle = {
  backgroundColor: 'white',
  border: 'none',
  overflow: 'auto'
};

const chatMessageStyle = (mine: boolean): ComponentSlotStyle => ({
  backgroundColor: mine ? 'rgba(42, 161,255, 0.25)' : 'rgba(243,242,241)',
  overflowY: 'hidden'
});

const readReceiptIconStyle = (mine: boolean) =>
  mergeStyles({
    marginLeft: mine ? '1rem' : '0rem'
  });

const newMessageButtonStyle = mergeStyles({
  float: 'right',
  width: 'fit-content'
});

const loadMoreMessageButtonStyle = mergeStyles({
  minHeight: '1.5rem'
});

const DownIconStyle = mergeStyles({
  marginRight: '0.5em'
});

export {
  messageAvatarContainerStyle,
  chatMessageStyle,
  readReceiptIconStyle,
  chatContainerStyle,
  noReadReceiptStyle,
  chatStyle,
  newMessageButtonStyle,
  loadMoreMessageButtonStyle,
  DownIconStyle
};
