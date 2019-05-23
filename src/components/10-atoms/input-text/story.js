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
      '<axa-input-text label="Field Label" info="Info Message"></axa-input-text>'
  )
  .add(
    'Input text - placeholder',
    () =>
      '<axa-input-text label="Field Label" placeholder="Pre-filled content"></axa-input-text>'
  )
  .add(
    'Input text - value',
    () =>
      '<axa-input-text label="Field Label" value="blalba" placeholder="Placeholder"></axa-input-text>'
  )
  .add(
    'Input text - required',
    () =>
      '<axa-input-text required label="Field Label" error="Error Message" placeholder="Placeholder"></axa-input-text>'
  )
  .add('Input text - Error Message', () => {
    const inputText = document.createElement('axa-input-text');
    inputText.error = 'Error Message';
    inputText.info = 'Info Message';
    // inputText.valid = false;

    return inputText;
  });
