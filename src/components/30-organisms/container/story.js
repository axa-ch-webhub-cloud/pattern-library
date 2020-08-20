import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from './CHANGELOG.md';

export default {
  title: 'Components',
  decorators: [withKnobs],

  parameters: {
    readme: {
      sidebar: Readme,
    },

    changelog: Changelog,
  },
};

export const Container = () => {
  const wrapper = document.createElement('div');

  const childsText = text('text', 'Some children');

  const template = html`
    <axa-container>${childsText}</axa-container>
  `;

  render(template, wrapper);
  return wrapper;
};
