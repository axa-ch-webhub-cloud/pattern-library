/* global document */
import { storiesOf } from '@storybook/html';
// if your need more boolean, select, radios
import { withKnobs } from '@storybook/addon-knobs';
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
  const wrapper = document.createElement('div');
  const template = html`
    <axa-heading rank="1">H1 Primary Heading</axa-heading>
    <axa-heading rank="2">H2 Primary Heading</axa-heading>
    <axa-heading rank="3">H3 Primary Heading</axa-heading>
    <axa-heading rank="4">H4 Primary Heading</axa-heading>
    <axa-heading rank="5">H5 Primary Heading</axa-heading>
    <axa-heading rank="6">H6 Primary Heading</axa-heading>

    <axa-heading variant="secondary" rank="1">H1 Secondary Heading</axa-heading>
    <axa-heading variant="secondary" rank="2">H2 Secondary Heading</axa-heading>
    <axa-heading variant="secondary" rank="3">H3 Secondary Heading</axa-heading>
    <axa-heading variant="secondary" rank="4">H4 Secondary Heading</axa-heading>
    <axa-heading variant="secondary" rank="5">H5 Secondary Heading</axa-heading>
    <axa-heading variant="secondary" rank="6">H6 Secondary Heading</axa-heading>
  `;

  render(template, wrapper);
  return wrapper;
});
