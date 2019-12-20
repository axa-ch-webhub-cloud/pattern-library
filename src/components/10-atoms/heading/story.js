/* global document */
import { storiesOf } from '@storybook/html';
// if your need more boolean, select, radios
import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import './index';
import Readme from './README.md';

const storyAXAHeading = storiesOf('Atoms/Heading', module);
storyAXAHeading.addDecorator(withKnobs);
storyAXAHeading.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyAXAHeading.add('Heading', () => {
  const children = text('Text', 'Some Children');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-heading>${children}<axa-heading> </axa-heading></axa-heading>
  `;

  render(template, wrapper);
  return wrapper;
});
