import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';

export default {
  title: 'Components',
  decorators: [withKnobs],
};

export const InputPhone = () => {
  const textknob = text('This is a knob', 'Value of text knob');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-input-phone>${textknob}</axa-input-phone>
  `;

  render(template, wrapper);
  return wrapper;
};
