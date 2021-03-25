import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';

export default {
  title: 'Components',
  decorators: [withKnobs],
};

export const Spinner = () => {
  const textknob = text('This is a knob', 'Value of text knob');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-spinner>${textknob}</axa-spinner>
  `;

  render(template, wrapper);
  return wrapper;
};
