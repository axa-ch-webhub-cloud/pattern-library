import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';

export default {
  title: 'Components',
  decorators: [withKnobs],
};

export const ProgressBar = () => {
  const small = boolean('small', false);
  const fullWidth = boolean('fullWidth', false);
  const value = text('value', '32');
  const progressText = text('text', 'label text');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-progress-bar
      ?small=${small}
      ?fullWidth=${fullWidth}
      value=${value}
      text=${progressText}
    ></axa-progress-bar>
  `;

  render(template, wrapper);
  return wrapper;
};
