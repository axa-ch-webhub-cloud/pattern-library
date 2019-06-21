/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, radios, text, withKnobs } from '@storybook/addon-knobs';
import './index';
import Readme from './README.md';

const storyButton = storiesOf('Atoms/Button', module);
storyButton.addDecorator(withKnobs);
storyButton.addParameters({
  readme: {
    sidebar: Readme,
  },
});

const blueBackgroundStyle = 'background-color: #00008f; padding: 10px;';

storyButton.add('Button - default', () => {
  const options = {
    None: '',
    Red: 'red',
    Secondary: 'secondary',
    Inverted: 'inverted',
  };

  const buttonText = text('Text', 'Click me');
  const variants = radios('Variant', options, '');
  const motionOff = boolean('motionOff', false);
  const disabled = boolean('disabled', false);
  const large = boolean('large', false); // should probably be a variant.
  const type = radios('Types', { submit: 'submit', reset: 'reset' });

  return `<div style='${variants === 'inverted' ? blueBackgroundStyle : ''}'>
    <axa-button ${disabled ? 'disabled' : ''} ${
    large ? 'large' : ''
  } type='${type}' variant='${variants}' ${
    motionOff ? 'motionoff' : ''
  }>${buttonText}</axa-button></div>`;
});
