/* global document */
import { html, render } from 'lit-html';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Toggle Switch',
  parameters: {
    readme,
    changelog,
  },
};

export const ToggleSwitch = ({ active, disabled }) => {
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
ToggleSwitch.args = {
  active: false,
  disabled: false,
};
