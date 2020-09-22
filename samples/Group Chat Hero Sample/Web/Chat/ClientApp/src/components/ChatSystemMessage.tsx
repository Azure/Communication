import React from 'react';

import {
  ChatSystemMessageContainerStyle,
  ChatSystemMessageTextStyle,
} from './styles/ChatSystemMessage.styles';

interface ChatSystemMessage {
  generateCoolPeriod(): string;
  textValueOverflow: boolean;
}

export default (props: ChatSystemMessage): JSX.Element => {
  let coolPeriodMessage = props.generateCoolPeriod();

  if (coolPeriodMessage === '' && !props.textValueOverflow) {
    return <div className={ChatSystemMessageContainerStyle(false)} />;
  } else if (coolPeriodMessage !== '' && !props.textValueOverflow) {
    return (
      <div>
        <div className={ChatSystemMessageContainerStyle(true)}>
          <span className={ChatSystemMessageTextStyle}>
            {props.generateCoolPeriod()}
          </span>
        </div>
        <div className={ChatSystemMessageContainerStyle(true)} />
      </div>
    );
  } else {
    return (
      <div>
        <div className={ChatSystemMessageContainerStyle(true)}>
          {props.textValueOverflow && (
            <div className={ChatSystemMessageTextStyle}>
              Warning: Your message is over the limit of 8000 characters
            </div>
          )}
        </div>
        <div className={ChatSystemMessageContainerStyle(true)}>
          <span className={ChatSystemMessageTextStyle}>
            {props.generateCoolPeriod()}
          </span>
        </div>
      </div>
    );
  }
};
