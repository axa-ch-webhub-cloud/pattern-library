/* global document */
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Toggle Switch',
  decorators: [withKnobs],
  parameters: {
    readme,
    usage: {
      disabled: false,
      componentName: 'toggle-switch',
      propsReact: 'onChange={handler}',
    },
    changelog,
  },
};

export const ToggleSwitch = () => {
  const active = boolean('active', false);
  const disabled = boolean('disabled', false);
  const wrapper = document.createElement('div');

  const template = html`
    <axa-toggle-switch
      ?active=${active}
      ?disabled=${disabled}
    ></axa-toggle-switch>
  `;

  render(template, wrapper);
  return wrapper;
};
