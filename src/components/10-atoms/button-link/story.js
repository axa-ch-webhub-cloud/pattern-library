import {
  boolean,
  radios,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import { iconList } from '../icon/icon-list';
import Changelog from './CHANGELOG.md';
import './index';

const variantOptions = {
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

const sizeOptions = {
  default: '',
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

export default {
  title: 'Components',
  decorators: [withKnobs],
  parameters: {
    changelog: Changelog,
  },
};

export const ButtonLink = () => {
  const buttonText = text('text', 'Contact us');
  const href = text('href', '#');
  const external = boolean('external', false);
  const variants = radios('variant', variantOptions, '');
  const sizes = radios('size', sizeOptions, '');
  const icons = select('Icon', iconList, '');
  const motionOff = boolean('motionoff', false);
  const disabled = boolean('disabled', false);

  const wrapper = document.createElement('div');
  const template = html`
    <div
      style="${variants.includes('inverted')
        ? `background-color: ${invertedBgs[variants]}; padding: 10px;`
        : ''}"
    >
      <axa-button-link
        variant="${variants}"
        size="${sizes}"
        icon="${icons}"
        href="${href}"
        ?external="${external}"
        ?disabled="${disabled}"
        ?motionoff="${motionOff}"
        >${buttonText}
      </axa-button-link>
    </div>
  `;

  render(template, wrapper);
  return wrapper;
};
