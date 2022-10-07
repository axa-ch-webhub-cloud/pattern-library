import { LitElement, html, css, unsafeCSS } from 'lit';
import { defineVersioned } from '../../../utils/component-versioning';
import applyDefaults from '../../../utils/apply-defaults';
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
      variant: { type: String, reflect: true },
      tagless: { type: Boolean },
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

    if (!this.tagless) {
      this.setAttribute('aria-role', 'paragraph');
    }
  }

  render() {
    return this.tagless
      ? html`<slot></slot>`
      : html`<p><slot></slot></p>`;
  }
}

defineVersioned([AXAText], __VERSION_INFO__);

export default AXAText;
