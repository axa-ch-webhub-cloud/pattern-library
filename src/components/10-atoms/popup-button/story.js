/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const storyPopupButton = storiesOf('Atoms/Popup Button', module);
storyPopupButton.addDecorator(withKnobs);
storyPopupButton.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyPopupButton.add('Popup Button - default', () => {
  const open = boolean('open', false);
  const name = text('name', '');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-popup-button ?open="${open}" name="${name}"></axa-popup-button>
  `;

  render(template, wrapper);
  return wrapper;
});
