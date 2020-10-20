/* global document */
import { withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';

export default {
  title: 'Components/Stepper',
  decorators: [withKnobs],
  parameters: {
    changelog: Changelog,
  },
};

export const Stepper = () => {
  const wrapper = document.createElement('div');

  const template = html`
    <axa-stepper></axa-stepper>
  `;

  render(template, wrapper);
  return wrapper;
};
