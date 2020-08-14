import { html } from 'lit-html';
import styles from './index.scss';

export const callout = (icon, header, text, link, linkText) => html`
  <style>
    ${styles}
  </style>
  <div class="callout-wrapper">
    <div class="callout-image">
      <img src="${icon}" alt="AXA Design System UI Kit" />
    </div>
    <div class="callout-col callout-col-padding">
      <p class="callout-header">${header}</p>
      <p class="callout-text">
        ${text}
      </p>
    </div>
    <div class="callout-col">
      <axa-button-link
        style="width: 100%;"
        size="large"
        href="${link}"
        external=""
      >
        ${linkText}
      </axa-button-link>
    </div>
  </div>
`;
