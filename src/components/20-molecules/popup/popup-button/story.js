import { html, render } from 'lit-html';
import changelog from '../CHANGELOG.md';
import readme from '../README.md';
import './index';

export default {
  title: 'Components/Popup Button',
  parameters: {
    readme,
    changelog,
  },
};

export const PopupButton = ({ open }) => {
  const wrapper = document.createElement('div');
  const template = html`
    <axa-popup-button ?open="${open}"></axa-popup-button>
  `;

  render(template, wrapper);
  return wrapper;
};
PopupButton.args = {
  open: false,
};
