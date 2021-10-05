// if your need more boolean, select, radios
import { radios, text, withKnobs } from '@storybook/addon-knobs';
import { html, render } from 'lit-html';
import withNoBorder from '../../../../.storybook/addons/no-border';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

export default {
  title: 'Components/Commercial Hero Banner',
  decorators: [withKnobs, withNoBorder],
  parameters: {
    readme,
    changelog,
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
    <div>
      <axa-commercial-hero-banner
        variant="${variant}"
        imagesource="${imageSource}"
      >
        <header slot="title">
          <p>This example shows specific picture classes</p>
          <h1>Drive with peace of mind</h1>
        </header>
        <div slot="content" class="checkmarks">
          <div class="checkmark">
            <axa-icon
              class="checkmark-icon"
              icon="check-circle"
              size="auto"
            ></axa-icon>
            <span class="checkmark-text">Extra Cookie</span>
          </div>
          <div class="checkmark">
            <axa-icon
              class="checkmark-icon"
              icon="check-circle"
              size="auto"
            ></axa-icon>
            <span class="checkmark-text">Awesome People</span>
          </div>
          <div class="checkmark">
            <axa-icon
              class="checkmark-icon"
              icon="check-circle"
              size="auto"
            ></axa-icon>
            <span class="checkmark-text">Best in class Service</span>
          </div>
        </div>

        <axa-button-link
          href="https://axa.ch"
          slot="button"
          variant="red"
          size="large"
          >GET A QUOTE</axa-button-link
        >
      </axa-commercial-hero-banner>
    </div>
  `;
  render(template, wrapper);
  return wrapper;
};
