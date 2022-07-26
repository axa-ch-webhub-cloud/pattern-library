import { html } from 'lit';
import { args, argTypes } from './story.args';
import changelog from './CHANGELOG.md';
import readme from './README.md';
import './index';

export default {
  title: 'Components/Commercial Hero Banner',
  parameters: {
    readme,
    changelog,
    layout: 'fullscreen',
  },
  args,
  argTypes,
};

export const CommercialHeroBanner = ({ variant, imageSource }) =>
  html`
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

        <small slot="disclaimer">Terms and Conditions apply.</small>

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
