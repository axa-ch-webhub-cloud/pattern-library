/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/html';
import { boolean, text, radios, withKnobs } from '@storybook/addon-knobs';
import AXAInputText from './AXAInputText';
import Readme from '../README.md';

const typeOptions = {
  text: 'text',
  email: 'email',
  password: 'password',
};

const storyInputText = storiesOf('Atoms/Input Text/React', module);
storyInputText.addDecorator(withKnobs);
storyInputText.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyInputText.add('Input Text', () => {
  const label = text('label*', '');
  const name = text('name*', '');
  const refId = text('refId', '');
  const placeholder = text('placeholder', '');
  const value = text('value', '');
  const error = text('error', '');
  const info = text('info', '');
  const defaultValue = text('defaultValue', '');
  const checkMark = boolean('checkMark', false);
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const invalid = boolean('invalid', false);
  const types = radios('type', typeOptions, 'text');

  const wrapper = document.createElement('div');
  ReactDOM.render(
    <AXAInputText
      refId={refId}
      name={name}
      label={label}
      placeholder={placeholder}
      checkMark={checkMark}
      disabled={disabled}
      required={required}
      invalid={invalid}
      value={value}
      defaultValue={defaultValue}
      type={types}
      error={error}
      info={info}
    />,
    wrapper
  );

  return wrapper;
});
