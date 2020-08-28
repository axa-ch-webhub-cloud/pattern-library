/* global document */
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import Changelog from './CHANGELOG.md';
import './index';

export default {
  title: 'Components',
  decorators: [withKnobs],
  parameters: {
    changelog: Changelog,
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
