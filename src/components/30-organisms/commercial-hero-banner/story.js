/* global document */
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/html';
// if your need more boolean, select, radios
import { radios, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import './index';
import Readme from './README.md';

const label = 'Variant';
const options = {
  light: 'light',
  dark: 'dark',
};

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
  const variant = radios(label, options, 'light');

  const wrapper = document.createElement('div');
  const template = html`
    <axa-commercial-hero-banner
      variant="${variant}"
      src="https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg"
      imageposition="center center"
    >
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
      <axa-button-link href="https://axa.ch" slot="button"
        >YES!</axa-button-link
      >
      <axa-button-link href="https://axa.ch" slot="button" variant="secondary"
        >Tell me more...</axa-button-link
      >
    </axa-commercial-hero-banner>
  `;

  render(template, wrapper);
  return wrapper;
});
