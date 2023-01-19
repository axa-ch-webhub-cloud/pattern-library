import { LitElement, html, css, unsafeCSS } from 'lit';
import { defineVersioned } from '../../../utils/component-versioning.js';
import applyDefaults from '../../../utils/apply-defaults.js';
import styles from './index.scss';

class AXAText extends LitElement {
  static get tagName() {
    return 'axa-text';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      size: { type: Number, reflect: true, defaultValue: 1 },
      nowrap: { type: Boolean, reflect: true },
      bold: { type: Boolean, reflect: true },
      italic: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.nowrap) {
      this.setAttribute('aria-role', 'paragraph');
    }
  }

  render() {
    return this.nowrap ? html`<slot></slot>` : html`<p><slot></slot></p>`;
  }
}

defineVersioned([AXAText], __VERSION_INFO__);

export default AXAText;
