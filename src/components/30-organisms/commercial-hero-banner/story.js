// if your need more boolean, select, radios
import { text, radios, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import './index';
import Changelog from './CHANGELOG.md';

export default {
  title: 'Components',
  decorators: [withKnobs, withNoBorder],
  parameters: {
    changelog: Changelog,
  },
};

export const CommercialHeroBanner = () => {
  const variant = radios(
    'Variant',
    {
      light: 'light',
      dark: 'dark',
    },
    'light'
  );

  const imageSource = text(
    'Image Source',
    'https://d5cplpsrt2s33.cloudfront.net/m/24c1b33e4e8ceda1/WIDE_1440_560_X2-hero_kv_neu_kv_breit_web.jpg'
  );

  const wrapper = document.createElement('div');
  const template = html`
    <axa-commercial-hero-banner
      variant="${variant}"
      imagesource="${imageSource}"
    >
      <header slot="title">
        <p>This example shows specific picture classes</p>
        <h1>Drive with peace of mind</h1>
      </header>
      <p slot="content">
        Whether you need to insure your first car or renew your existing car
        insurance, AXA can provide a range of car insurance policies to suit
        your requirements and offer great product benefits at a price you can
        afford
      </p>
      <small slot="disclaimer">Terms and Conditions apply.</small>
      <axa-button-link
        href="https://axa.ch"
        slot="button"
        variant="red"
        size="large"
        >GET A QUOTE</axa-button-link
      >
    </axa-commercial-hero-banner>
  `;
  render(template, wrapper);
  return wrapper;
};
