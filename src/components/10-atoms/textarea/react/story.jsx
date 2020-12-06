/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXATextarea from './AXATextarea';

export default {
  title: 'Examples/Textarea/React',
  parameters: {
    readme,
    changelog,
  },
};

export const Story = ({
  label,
  name,
  refId,
  placeholder,
  error,
  checkMark,
  disabled,
  required,
  invalid,
  counter,
  counterMax,
  defaultValue,
  maxLength,
}) => {
  const wrapper = document.createElement('div');
  ReactDOM.render(
    <AXATextarea
      refId={refId}
      name={name}
      label={label}
      placeholder={placeholder}
      error={error}
      counter={counter}
      counterMax={counterMax}
      maxLength={maxLength}
      checkMark={checkMark}
      disabled={disabled}
      required={required}
      invalid={invalid}
      defaultValue={defaultValue}
    />,
    wrapper
  );

  return wrapper;
};

Story.args = {
  label: 'Please describe the course of events',
  name: '',
  refId: '',
  placeholder: '',
  defaultValue: '',
  error: '',
  checkMark: false,
  disabled: false,
  required: false,
  invalid: false,
  counter: '',
  counterMax: '',
  maxLength: '',
};
