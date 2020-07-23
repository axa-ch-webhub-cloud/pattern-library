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
import { iconList } from '../icon/icon-list';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

const storyButton = storiesOf('Components', module);
storyButton.addDecorator(withKnobs);
storyButton.addParameters({
  readme: {
    sidebar: Readme,
  },
  changelog: Changelog,
});

export const variantOptions = {
  default: '',
  red: 'red',
  secondary: 'secondary',
  inverted: 'inverted',
  'Inverted-blue-ocean': 'inverted-blue-ocean',
  'inverted-red-tosca': 'inverted-red-tosca',
  'inverted-purple-logan': 'inverted-purple-logan',
  'inverted-green-viridian': 'inverted-green-viridian',
  'inverted-blue-teal': 'inverted-blue-teal',
};

export const sizeOptions = {
  default: '',
  large: 'large',
  small: 'small',
};

export const typesOptions = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
};

export const invertedBgs = {
  inverted: '#00008f',
  'inverted-blue-ocean': '#4976ba',
  'inverted-red-tosca': '#914146',
  'inverted-purple-logan': '#9190ac',
  'inverted-green-viridian': '#668980',
  'inverted-blue-teal': '#027180',
};

storyButton.add('Button', () => {
  const buttonText = text('text', 'Calculate Premium');
  const variants = radios('variant', variantOptions, '');
  const sizes = radios('size', sizeOptions, '');
  const icons = select('icon', iconList, '');
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
        variant="${variants}"
        size="${sizes}"
        icon="${icons}"
        ?disabled="${disabled}"
        ?motionoff="${motionOff}"
        >${buttonText}
      </axa-button>
    </div>
  `;
  render(template, wrapper);
  return wrapper;
});
