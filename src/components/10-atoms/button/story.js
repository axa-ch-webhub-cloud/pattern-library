/* global document */
import { storiesOf } from '@storybook/html';
import {
  boolean,
  select,
  radios,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import { iconOptions } from '../icon/story';
import Readme from './README.md';

const storyButton = storiesOf('Atoms/Button', module);
storyButton.addDecorator(withKnobs);
storyButton.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyButton.add('Button', () => {
  const variantOptions = {
    none: '',
    red: 'red',
    secondary: 'secondary',
    inverted: 'inverted',
    'Inverted-blue-ocean': 'inverted-blue-ocean',
    'inverted-red-tosca': 'inverted-red-tosca',
    'inverted-purple-logan': 'inverted-purple-logan',
    'inverted-green-viridian': 'inverted-green-viridian',
    'inverted-blue-teal': 'inverted-blue-teal',
  };

  const sizeOptions = {
    none: '',
    large: 'large',
    small: 'small',
  };

  const typesOptions = {
    button: 'button',
    submit: 'submit',
    reset: 'reset'
  };

  const invertedBgs = {
    inverted: '#00008f',
    'inverted-blue-ocean': '#4976ba',
    'inverted-red-tosca': '#914146',
    'inverted-purple-logan': '#9190ac',
    'inverted-green-viridian': '#668980',
    'inverted-blue-teal': '#027180',
  };

  const buttonText = text('text', 'Click me');
  const variants = radios('variant', variantOptions, '');
  const sizes = radios('size', sizeOptions, '');
  const icons = select('icon', iconOptions, '');
  const motionOff = boolean('motionOff', false);
  const disabled = boolean('disabled', false);
  const types = radios('types', typesOptions, 'button');

  const wrapper = document.createElement('div');
  const template = html`
    <div
      style="${variants.includes('inverted')
    ? `background-color: ${invertedBgs[variants]}; padding: 10px;`
    : ''}"
    >
      <axa-button
        type="${types}"
        ?disabled="${disabled}"
        ?motionoff="${motionOff}"
        variant="${variants}"
        size="${sizes}"
        icon="${icons}"
        >${buttonText}
      </axa-button>
    </div>
  `;

  render(template, wrapper);
  return wrapper;
});
