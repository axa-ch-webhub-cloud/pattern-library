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

const storyButtonLink = storiesOf('Atoms/Button Link', module);
storyButtonLink.addDecorator(withKnobs);
storyButtonLink.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyButtonLink.add('Button Link', () => {
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

  const invertedBgs = {
    inverted: '#00008f',
    'inverted-blue-ocean': '#4976ba',
    'inverted-red-tosca': '#914146',
    'inverted-purple-logan': '#9190ac',
    'inverted-green-viridian': '#668980',
    'inverted-blue-teal': '#027180',
  };

  const buttonText = text('text', 'Click me');
  const href = text('href', '');
  const external = text('external', '');
  const variants = radios('Variant', variantOptions, '');
  const sizes = radios('size', sizeOptions, '');
  const icons = select('Icon', iconOptions, '');
  const motionOff = boolean('motionOff', false);
  const disabled = boolean('disabled', false);

  const wrapper = document.createElement('div');
  const template = html`
    <div
      style="${variants.includes('inverted')
        ? `background-color: ${invertedBgs[variants]}; padding: 10px;`
        : ''}"
    >
      <axa-button-link
        ?disabled="${disabled}"
        ?motionoff="${motionOff}"
        variant="${variants}"
        size="${sizes}"
        icon="${icons}"
        href="${href}"
        external="${external}"
        >${buttonText}
      </axa-button-link>
    </div>
  `;

  render(template, wrapper);
  return wrapper;
});
