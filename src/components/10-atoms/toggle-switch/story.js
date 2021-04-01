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
      componentName: 'toggle-switch',
      propsReact: 'onChange={handler}',
    },
    changelog,
  },
};

export const ToggleSwitch = () => {
  const active = boolean('active', false);
  const disabled = boolean('disabled', false);
  const error = boolean('error', false);
  const wrapper = document.createElement('div');

  const template = html`
    <axa-toggle-switch
      ?active=${active}
      ?disabled=${disabled}
      ?error=${error}
    ></axa-toggle-switch>
  `;

  render(template, wrapper);
  return wrapper;
};
