/* global document */
import { storiesOf } from '@storybook/html';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const storyPopupContent = storiesOf('Molecules/Popup', module);
storyPopupContent.addDecorator(withKnobs);
storyPopupContent.addParameters({
  readme: {
    sidebar: Readme,
  },
});

const children = html`<h4>Zeitspanne bis zur Pensionierung</h4>
    <p>Für die Berechnung Ihres monatlichen Einkommens im Alter ist die Zeitspanne bis zum Zeitpunkt Ihrer Pensionierung entscheidend.</p>`;

storyPopupContent.add('Popup Content - default', () => {
  const open = boolean('open', false);

  const wrapper = document.createElement('div');
  const template = html`
    <axa-popup-content ?open="${open}">${children}</axa-popup-content>
  `;

  render(template, wrapper);
  return wrapper;
});
