import { radios, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import readme from './README.md';
import changelog from './CHANGELOG.md';

export default {
  title: 'Components/Spinner',
  decorators: [withKnobs],
  parameters: {
    readme,
    usage: {
      componentName: 'spinner',
    },
    changelog,
  },
};

const sizeOptions = {
  default: 'default',
  small: 'small',
};

const invertedBgs = {
  default: 'inverted-blue-ocean',
  'dark grey': 'inverted-dark-grey',
  white: 'inverted-white',
};

export const Spinner = () => {
  const sizes = radios('size', sizeOptions, 'default');
  const colors = radios('color', invertedBgs, 'inverted-blue-ocean');

  const wrapper = document.createElement('div');

  const template = html`
    <style>
      body {
        background-color: ${colors === 'inverted-white' ? '#ccc' : '#fff'};
      }
    </style>
    <axa-spinner size="${sizes}" color="${colors}"></axa-spinner>
  `;

  render(template, wrapper);
  return wrapper;
};
