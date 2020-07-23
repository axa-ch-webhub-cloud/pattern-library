/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';
import Changelog from '../CHANGELOG.md';

const storyPopupButton = storiesOf('Components', module);
storyPopupButton.addDecorator(withKnobs);
storyPopupButton.addParameters({
  readme: {
    sidebar: Readme,
  },
  changelog: Changelog,
});

storyPopupButton.add('Popup Button', () => {
  const open = boolean('open', false);

  const wrapper = document.createElement('div');
  const template = html`
    <axa-popup-button ?open="${open}"></axa-popup-button>
  `;

  render(template, wrapper);
  return wrapper;
});
