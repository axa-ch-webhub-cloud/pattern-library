import { html } from 'lit-html';
import styles from './index.scss';

export const callout = (icon, header, text, link, linkText) => html`
  <style>
    ${styles}
  </style>
  <div class="callout">
    <div class="callout__image">
      <img src="${icon}" alt="AXA Design System UI Kit" />
    </div>
    <div class="callout__col callout__col-padding">
      <p class="callout__header">${header}</p>
      <p class="callout__text">
        ${text}
      </p>
    </div>
    <div class="callout__col">
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
