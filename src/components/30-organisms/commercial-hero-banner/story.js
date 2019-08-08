/* global document */
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/html';
// if your need more boolean, select, radios
import { text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import './index';
import Readme from './README.md';

const storyAXACommercialHeroBanner = storiesOf(
  'Organisms/Commercial hero banner',
  module
);
storyAXACommercialHeroBanner.addDecorator(withNoBorder);
storyAXACommercialHeroBanner.addDecorator(withKnobs);
storyAXACommercialHeroBanner.addParameters({
  readme: {
    sidebar: Readme,
  },
});

storyAXACommercialHeroBanner.add('Commercial hero banner', () => {
  const children = text('Text', 'Some Children');
  children.toString(); // TODO A placeholder for future knob implementation

  const wrapper = document.createElement('div');
  const template = html`
    <axa-commercial-hero-banner variant="light">
      <h2 slot="category">Insurance</h2>
      <h1 slot="title">Title</h1>
      <p slot="content">
        This is the content<br />And some lines below in the same paragraph.
      </p>
      <p slot="content">
        This is another content paragraph. It is made up with several phrases
        that summarize a short description to what the user should know about
        the offer or product that is being advertised.
      </p>
      <small slot="disclaimer">Terms and Conditions apply.</small>
      <axa-button slot="button">YES!</axa-button>
      <axa-button slot="button">Tell me more...</axa-button>
    </axa-commercial-hero-banner>
  `;

  render(template, wrapper);
  return wrapper;
});
