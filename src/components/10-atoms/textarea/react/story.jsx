/* global document */
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import React from 'react';
import ReactDOM from 'react-dom';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import AXATextarea from './AXATextarea';

const storyTextarea = storiesOf('Examples/Textarea/React', module);
storyTextarea.addDecorator(withKnobs);
storyTextarea.addParameters({
  readme,
  usage: { disable: true },
  changelog,
});

storyTextarea.add('Story', () => {
  const label = text('label', 'Please describe the course of events');
  const name = text('name', '');
  const refId = text('refId', '');
  const placeholder = text('placeholder', '');
  const error = text('error', '');
  const defaultValue = text('defaultValue', '');
  const checkMark = boolean('checkMark', false);
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const invalid = boolean('invalid', false);
  const counter = text('counter', '');
  const counterMax = text('counterMax', '');
  const maxLength = text('maxLength', '');

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
});
