/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import Readme from './README.md';

storiesOf('Atoms/Input text', module)
  .addParameters({
    readme: {
      sidebar: Readme,
    },
  })
  .add('Input text - default', () => '<axa-input-text></axa-input-text>')
  .add(
    'Input text - label',
    () => '<axa-input-text label="Field Label"></axa-input-text>'
  )
  .add(
    'Input text - placeholder',
    () =>
      '<axa-input-text placeholder="Pre-filled content"></axa-input-text>'
  )
  .add(
    'Input text - validation',
    () =>
      '<axa-input-text validation placeholder="Pre-filled content"></axa-input-text>'
  )
  .add(
    'Input text - type',
    () => `<div>
          <axa-input-text label="Text"></axa-input-text>
          <axa-input-text type="email" label="Email"></axa-input-text>
          <axa-input-text type="password" label="Password"></axa-input-text>
        </div>`
  )
  .add(
    'Input text - value',
    () =>
      '<axa-input-text value="Example Value"></axa-input-text>'
  )
  .add(
    'Input text - disabled',
    () =>
      '<axa-input-text disabled></axa-input-text>'
  )
  .add(
    'Input text - required',
    () =>
      '<axa-input-text required label="Field Label"></axa-input-text>'
  )
  .add('Input text - Error Message', () => {
    const inputText = document.createElement('axa-input-text');
    inputText.error = 'Error Message';
    inputText.validation = true;
    inputText.valid = false;

    return inputText;
  });
