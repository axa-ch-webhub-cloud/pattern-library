import { LitElement, html, css, unsafeCSS } from 'lit';

import { defineVersioned } from '../../../utils/component-versioning';
import styles from './index.scss';

class AXAContainer extends LitElement {
  static get tagName() {
    return 'axa-container';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  render() {
    return html`
      <article class="o-container">
        <slot></slot>
      </article>
    `;
  }
}

defineVersioned([AXAContainer], __VERSION_INFO__);

export default AXAContainer;
