import { LitElement, html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { defineVersioned } from '../../../utils/component-versioning';
import applyDefaults from '../../../utils/apply-defaults';
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
      secondary: { type: Boolean },
      rank: { type: Number },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    const { secondary, rank } = this;
    const secondaryClass = secondary ? 'a-heading--secondary' : '';

    const template = `<h${rank} class="a-heading ${secondaryClass}"><slot></slot></h${rank}>`;

    return html`${unsafeHTML(template)}`;
  }
}

defineVersioned([AXAHeading], __VERSION_INFO__);

export default AXAHeading;
