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
    <axa-heading rank="1">H1 Heading</axa-heading>
    <axa-heading rank="2">H2 Heading</axa-heading>
    <axa-heading rank="3">H3 Heading</axa-heading>
    <axa-heading rank="4">H4 Heading</axa-heading>
    <axa-heading rank="5">H5 Heading</axa-heading>
    <axa-heading rank="6">H6 Heading</axa-heading>
  `;

  render(template, wrapper);
  return wrapper;
});
