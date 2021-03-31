import { radios, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';

export default {
  title: 'Components',
  decorators: [withKnobs],
};

const sizeOptions = {
  default: 'default',
  small: 'small',
};

const invertedBgs = {
  default: 'inverted-blue-ocean',
  black: 'inverted-black',
  white: 'inverted-white',
};

export const Spinner = () => {
  const sizes = radios('size', sizeOptions, 'default');
  const colors = radios('color', invertedBgs, 'inverted-blue-ocean');

  const wrapper = document.createElement('div');

  document.body.style.backgroundColor =
    colors === 'inverted-white' ? '#ccc' : '#fff';

  const template = html`
    <axa-spinner size="${sizes}" color="${colors}"></axa-spinner>
  `;

  render(template, wrapper);
  return wrapper;
};
