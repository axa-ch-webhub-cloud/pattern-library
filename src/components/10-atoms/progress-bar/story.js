import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import readme from './README.md';
import changelog from './CHANGELOG.md';

export default {
  title: 'Components/Progress Bar',
  decorators: [withKnobs],
  parameters: {
    readme,
    usage: {
      componentName: 'progress-bar',
    },
    changelog,
  },
};

export const ProgressBar = () => {
  const small = boolean('small', false);
  const fullWidth = boolean('fullWidth', false);
  const value = text('value', '32');
  const max = text('max', '');
  const progressText = text('text', '');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-progress-bar
      ?small=${small}
      ?fullWidth=${fullWidth}
      value=${value}
      max=${max}
      text=${progressText}
    ></axa-progress-bar>
  `;

  render(template, wrapper);
  return wrapper;
};
