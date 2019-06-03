/* global document */
import { storiesOf } from '@storybook/html';
import './index';
import { withMarkdown } from '../../../../.storybook/addons/markdown';
import Readme from './README.md';

storiesOf('Atoms/Input text', module)
  .addDecorator(withMarkdown(Readme))
  .add('Input text - default', () => '<axa-input-text></axa-input-text>')
  .add(
    'Input text - label',
    () =>
      '<axa-input-text label="Field Label"></axa-input-text>'
  )
  .add(
    'Input text - placeholder',
    () =>
      '<axa-input-text label="Field Label" placeholder="Pre-filled content"></axa-input-text>'
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
