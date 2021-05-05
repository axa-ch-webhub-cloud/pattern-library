import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

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
    const listTag = this.variant === 'ordered' ? 'ol' : 'ul';

    const template = `
      <${listTag}>
        <slot></slot>
      </${listTag}>
    `;

    return html`
      ${unsafeHTML(template)}
    `;
  }
}

defineVersioned([AXAList], __VERSION_INFO__);

export default AXAList;
