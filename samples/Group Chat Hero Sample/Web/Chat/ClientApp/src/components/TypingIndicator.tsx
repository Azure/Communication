import React from 'react';

import {
  TypingIndicatorContainerStyle,
  TypingIndicatorListStyle,
  TypingIndicatorVerbStyle,
} from './styles/TypingIndicator.styles';

interface TypingIndicatorProps {
  generateTypingIndicatorList(): string;
  generateTypingIndicatorVerb(): string;
}

export default (props: TypingIndicatorProps): JSX.Element => {
  return (
    <div className={TypingIndicatorContainerStyle}>
      <span className={TypingIndicatorListStyle}>
        {props.generateTypingIndicatorList()}
      </span>
      <span className={TypingIndicatorVerbStyle}>
        {props.generateTypingIndicatorVerb()}
      </span>
    </div>
  );
};
