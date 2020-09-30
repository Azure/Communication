import React from 'react';
import { TextField } from '@fluentui/react';

import {
  inputBoxStyle,
  inputBoxTextStyle,
  TextFieldStyleProps,
  inputBoxWarningStyle,
  labelFontStyle,
  warningStyle,
} from './styles/ConfigurationScreen.styles';
import { MAXIMUM_LENGTH_OF_NAME, ENTER_KEY } from '../constants';

interface DisplayNameFieldProps {
  setName(name: string): void;
  setEmptyWarning(isEmpty: boolean): void;
  setNameLengthExceedLimit(isNameLengthExceedLimit: boolean): void;
  validateName(): void;
  isEmpty: boolean;
  isNameLengthExceedLimit: boolean;
}

export default (props: DisplayNameFieldProps): JSX.Element => {
  const onNameTextChange = (event: any) => {
    props.setName(event.target.value);
    if (!event.target.value) {
      props.setEmptyWarning(true);
    } else if (event.target.value.length > MAXIMUM_LENGTH_OF_NAME) {
      props.setNameLengthExceedLimit(true);
    } else {
      props.setEmptyWarning(false);
      props.setNameLengthExceedLimit(false);
    }
  };

  return (
    <div>
      <div className={labelFontStyle}>Name</div>
      <TextField
        autoComplete="off"
        inputClassName={inputBoxTextStyle}
        ariaLabel="Choose your name"
        borderless={true}
        className={
          props.isEmpty || props.isNameLengthExceedLimit
            ? inputBoxWarningStyle
            : inputBoxStyle
        }
        onChange={onNameTextChange}
        id="name"
        placeholder="Enter your name"
        onKeyDown={(ev) => {
          if (ev.which === ENTER_KEY) {
            props.validateName();
          }
        }}
        styles={TextFieldStyleProps}
      />
      {(props.isEmpty && (
        <div role="alert" className={warningStyle}>
          {' '}
          Name cannot be empty{' '}
        </div>
      )) ||
        (props.isNameLengthExceedLimit && (
          <div role="alert" className={warningStyle}>
            {' '}
            Name cannot be over 10 characters{' '}
          </div>
        ))}
    </div>
  );
};
