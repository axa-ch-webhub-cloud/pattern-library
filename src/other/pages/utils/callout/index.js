import { html } from 'lit-html';
import styles from './index.scss';

export default html`
  <style>
    ${styles}
  </style>
  <div class="callout-wrapper">
    <div class="callout-image">
      <img src="figma.png" alt="AXA Design System UI Kit" />
    </div>
    <div class="callout-col callout-col-padding">
      <p class="callout-header">AXA Design System UI Kit</p>
      <p class="callout-text">
        To design with AXA Design System you need the most recent version of
        Sketch installed.
      </p>
    </div>
    <div class="callout-col">
      <axa-button-link style="width: 100%;" size="large" href="#" external="">
        Contact us
      </axa-button-link>
    </div>
  </div>
`;
