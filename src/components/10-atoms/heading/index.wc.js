import { LitElement, html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { defineVersioned } from '../../../utils/component-versioning.js';
import applyDefaults from '../../../utils/apply-defaults.js';
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
    return {
      secondary: { type: Boolean, reflect: true },
      size: { type: Number, reflect: true, defaultValue: 1 },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    const template = `<h${this.size} class="a-heading"><slot></slot></h${this.size}>`;

    return html`${unsafeHTML(template)}`;
  }
}

defineVersioned([AXAHeading], __VERSION_INFO__);

export default AXAHeading;
