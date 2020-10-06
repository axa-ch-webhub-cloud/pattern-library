import { boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Changelog from '../CHANGELOG.md';

export default {
  title: 'Components/Popup Button',
  decorators: [withKnobs],
  parameters: {
    changelog: Changelog,
  },
};

export const PopupButton = () => {
  const open = boolean('open', false);

  const wrapper = document.createElement('div');
  const template = html`
    <axa-popup-button ?open="${open}"></axa-popup-button>
  `;

  render(template, wrapper);
  return wrapper;
};
