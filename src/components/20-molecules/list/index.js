import { LitElement, html, css, unsafeCSS } from 'lit-element';

import {
  defineVersioned,
  /* versionedHtml, */
} from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

class AXAList extends LitElement {
  static get tagName() {
    return 'axa-list';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      variant: { type: String },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    return html`
      <article class="m-list">
        <slot></slot>
      </article>
    `;
  }
}

defineVersioned([AXAList], __VERSION_INFO__);

export default AXAList;
