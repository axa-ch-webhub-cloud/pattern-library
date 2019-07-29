/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';
import './index';
import Readme from './README.md';

const story = storiesOf('Atoms/Input text', module);
story.addDecorator(withKnobs);
story.addParameters({
  readme: {
    sidebar: Readme,
  },
});

story.add('Input text', () => {
  const optionsType = ['', 'email', 'password'];

  const label = text('label', 'Field Label');
  const placeholder = text('placeholder', 'Pre-filled content');
  const checkmark = boolean('checkmark', false);
  const embedded = boolean('embedded', false);
  const type = radios('type', optionsType, '');
  const value = text('value', 'Example Value');
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  const invalid = boolean('invalid', false);
  const errortext = boolean('Error Message', false);

  return `<axa-input-text
    id='axaInputTextStoryboard'
    label='${label}'
    placeholder="${placeholder}"
    ${checkmark ? 'checkmark' : ''}
    ${embedded ? 'embedded' : ''}
    type="${type}"
    value="${value}"
    ${disabled ? 'disabled' : ''}
    ${required ? 'required' : ''}
    ${invalid ? 'invalid' : ''}
    error = '${errortext ? 'Error Message' : ''}'
  ></axa-input-text>`;
});
