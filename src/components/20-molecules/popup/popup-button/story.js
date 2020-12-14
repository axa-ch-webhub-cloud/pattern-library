import { boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import './index';

export default {
  title: 'Components/Popup Button',
  decorators: [withKnobs],
  parameters: {
    readme,
    usage: {
      disabled: false,
      componentName: 'popup',
      propsReact: 'onClick={handler}',
    },
    changelog,
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
