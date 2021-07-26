import { LitElement, html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

/* eslint-disable import/no-extraneous-dependencies */
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

const TOP_BOTTOM_MARGINS_BY_RANK = {
  1: '20px',
  2: '18px',
  3: '16px',
  4: '14px',
  5: '12px',
  6: '10px',
};

class AXAHeading extends LitElement {
  static get tagName() {
    return 'axa-heading';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    // Define properties and types
    return {
      variant: { type: String },
      rank: { type: Number },
    };
  }

  constructor() {
    super();
    // this functions applies default values per type and verifies if
    // the HTML attribute has been set before defining the custom element
    applyDefaults(this);
  }

  render() {
    const secondaryVariant =
      this.variant === 'secondary' ? 'a-heading--secondary' : '';

    this.style.marginTop = TOP_BOTTOM_MARGINS_BY_RANK[this.rank];
    this.style.marginBottom = TOP_BOTTOM_MARGINS_BY_RANK[this.rank];

    const template = `
    <h${this.rank} class="a-heading ${secondaryVariant}">
      <slot></slot>
    </h${this.rank}>
    `;

    return html`
      ${unsafeHTML(template)}
    `;
  }
}

defineVersioned([AXAHeading], __VERSION_INFO__);

export default AXAHeading;
