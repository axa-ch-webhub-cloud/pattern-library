import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Container',
  decorators: [withKnobs],

  parameters: {
    readme,
    usage: {
      innerHTML: '...children',
    },
    changelog,
  },
};

export const Container = () => {
  const wrapper = document.createElement('div');

  const childsText = text('text', 'Some children');

  const template = html` <axa-container>${childsText}</axa-container> `;

  render(template, wrapper);
  return wrapper;
};
