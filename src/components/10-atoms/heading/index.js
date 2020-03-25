import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

/* eslint-disable import/no-extraneous-dependencies */
import defineOnce from '../../../utils/define-once';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

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

    const template = `
    <style>
      :host {
        display: block;
      }
    </style>
    <h${this.rank} class="a-heading ${secondaryVariant}">
      <slot></slot>
    </h${this.rank}>
    `;

    return html`
      ${unsafeHTML(template)}
    `;
  }
}

defineOnce(AXAHeading.tagName, AXAHeading);

export default AXAHeading;
