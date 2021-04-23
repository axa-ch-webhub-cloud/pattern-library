import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';

export default {
  title: 'Components',
  decorators: [withKnobs],
};

export const ProgressBar = () => {
  const small = boolean('small', false);
  const progressValue = text('progressValue', '32');
  const progressMaxValue = text('progressMaxValue', '100');
  const progressLabelText = text('progressLabelText', 'label text');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-progress-bar
      ?small=${small}
      progressValue=${progressValue}
      progressMaxValue=${progressMaxValue}
      progressLabelText=${progressLabelText}
    ></axa-progress-bar>
  `;

  render(template, wrapper);
  return wrapper;
};
