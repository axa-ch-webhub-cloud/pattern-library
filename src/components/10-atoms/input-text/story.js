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
      '<axa-input-text label="Field Label" placeholder="Pre-filled content"></axa-input-text>'
  )
  .add(
    'Input text - type',
    () => `<div>
          <axa-input-text label="Default Text" placeholder="Pre-filled content"></axa-input-text>
          <axa-input-text type="email" label="Email" placeholder="Pre-filled content"></axa-input-text>
          <axa-input-text type="password" label="Password" placeholder="Pre-filled content"></axa-input-text>
        </div>`
  )
  .add(
    'Input text - value',
    () =>
      '<axa-input-text label="Field Label" value="Example Value" placeholder="Placeholder"></axa-input-text>'
  )
  .add(
    'Input text - disabled',
    () =>
      '<axa-input-text disabled label="Field Label" placeholder="Placeholder"></axa-input-text>'
  )
  .add(
    'Input text - required',
    () =>
      '<axa-input-text required label="Field Label" error="Error Message" placeholder="Placeholder"></axa-input-text>'
  )
  .add('Input text - Error Message', () => {
    const inputText = document.createElement('axa-input-text');
    inputText.error = 'Error Message';
    inputText.validation = true;
    inputText.valid = false;

    return inputText;
  });
