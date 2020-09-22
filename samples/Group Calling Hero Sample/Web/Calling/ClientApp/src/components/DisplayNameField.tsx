import React from 'react';
import { TextField } from '@fluentui/react';

import {
  inputBoxStyle,
  inputBoxTextStyle,
  inputBoxWarningStyle,
  labelFontStyle,
  warningStyle
} from './styles/Configuration.styles';

interface DisplayNameFieldProps {
  setName(name: string): void;
  name: string;
  setEmptyWarning(isEmpty: boolean): void;
  isEmpty: boolean;
}

const TextFieldStyleProps = {
  root: {
    height: 'auto'
  }
};

export default (props: DisplayNameFieldProps): JSX.Element => {
  const onNameTextChange = (event: any) => {
    props.setName(event.target.value);
    if (event.target.value) {
      props.setEmptyWarning(false);
    } else {
      props.setEmptyWarning(true);
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
        className={props.isEmpty ? inputBoxWarningStyle : inputBoxStyle}
        onChange={onNameTextChange}
        id="name"
        placeholder="Enter your name"
        defaultValue={props.name}
        styles={TextFieldStyleProps}
      />
      {props.isEmpty && (
        <div role="alert" className={warningStyle}>
          {' '}
          Name cannot be empty{' '}
        </div>
      )}
    </div>
  );
};
