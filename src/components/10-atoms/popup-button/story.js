/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, withKnobs } from '@storybook/addon-knobs';
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

  const wrapper = document.createElement('div');
  const template = html`
    <axa-popup-button ?open="${open}"></axa-popup-button>
  `;

  render(template, wrapper);
  return wrapper;
});
