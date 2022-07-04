// if your need more boolean, select, radios
import { radios, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html, render } from 'lit';
import withNoBorder from '../../../../.storybook/addons/no-border';
import changelog from './CHANGELOG.md';
import './index';
import readme from './README.md';

const storyAXACommercialHeroBanner = storiesOf(
  'Examples/Commercial Hero Banner/Pure HTML',
  module
);

storyAXACommercialHeroBanner.addDecorator(withNoBorder);
storyAXACommercialHeroBanner.addDecorator(withKnobs);
storyAXACommercialHeroBanner.addParameters({
  readme,
  usage: { disable: true },
  changelog,
});

storyAXACommercialHeroBanner.add('With Badges', () => {
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
    <style>
      .o-commercial-hero-banner-demo__badge-wrapper {
        position: absolute;
        right: 20px;
        display: flex;
        padding: 10px;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        border-radius: 50% 50% 50% 0;
        background: #c91432;
        color: #fff;

        top: 10px;
        width: 120px;
        height: 120px;
      }

      .o-commercial-hero-banner-demo__badge-content {
        font-size: 18px;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: 0.01em;
        font-size: 16px;
      }

      .o-commercial-hero-banner-demo__addon-example {
        display: block;
        background: blue;
        color: white;
        height: 100px;
        width: 200px;
        margin-top: 20px;
      }

      @media (min-width: 576px) {
        .o-commercial-hero-banner-demo__badge-wrapper {
          width: 140px;
          height: 140px;
        }

        .o-commercial-hero-banner-demo__badge-content {
          font-size: 18px;
        }
      }

      @media (min-width: 992px) {
        .o-commercial-hero-banner-demo__badge-wrapper {
          margin-top: 0;
          top: 44px;
          width: 160px;
          height: 160px;
        }

        .o-commercial-hero-banner-demo__badge-content {
          font-size: 20px;
          line-height: 24px;
        }

        .o-commercial-hero-banner-demo__addon-example {
          position: absolute;
          top: 380px;
          right: 20px;
        }
      }

      @media (min-width: 1200px) {
        .o-commercial-hero-banner-demo__badge-wrapper {
          right: 150px;
        }

        .o-commercial-hero-banner-demo__addon-example {
          right: 150px;
        }
      }
    </style>
    <axa-commercial-hero-banner
      variant="${variant}"
      imagesource="${imageSource}"
    >
      <h2 slot="category">This example shows specific picture classes</h2>
      <h1 slot="title">Drive with peace of mind</h1>
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
      <div slot="addon-section">
        <div class="o-commercial-hero-banner-demo__badge-wrapper">
          <p class="o-commercial-hero-banner-demo__badge-content">
            Get up to CHF 100 discount
          </p>
        </div>
        <div class="o-commercial-hero-banner-demo__addon-example">
          This could be the customer review badge
        </div>
      </div>
    </axa-commercial-hero-banner>
  `;

  render(template, wrapper);
  return wrapper;
});
