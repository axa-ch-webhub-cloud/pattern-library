import { boolean, radios, withKnobs } from '@storybook/addon-knobs';
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

const invertedColors = {
  'ocean blue (default)': 'inverted-blue-ocean',
  'dark grey': 'inverted-dark-grey',
  white: 'inverted-white',
};

export const Spinner = () => {
  const sizes = boolean('small', false);
  const colors = radios('color', invertedColors, '');

  const wrapper = document.createElement('div');

  const template = html`
    <style>
      body {
        background-color: ${colors === 'inverted-white' ? '#ccc' : '#fff'};
      }
    </style>
    <axa-spinner ?small="${sizes}" color="${colors}"></axa-spinner>
  `;
  render(template, wrapper);
  return wrapper;
};
