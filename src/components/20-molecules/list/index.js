import { html, css, unsafeCSS } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import {
  defineVersioned,
  /* versionedHtml, */
} from '../../../utils/component-versioning';
import InlineStyles from '../../../utils/inline-styles';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';
import childStyles from './child.scss';

class AXAList extends InlineStyles {
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

  static get resetHeadingCss() {
    return childStyles;
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    const listTag = this.variant === 'ordered' ? 'ol' : 'ul';

    const template = `
      <${listTag} class="m-list">
        <slot></slot>
      </${listTag}>
    `;

    return html`
      ${unsafeHTML(template)}
    `;
  }

  firstUpdated() {
    this.inlineStyles('resetHeadingCss');
  }
}

defineVersioned([AXAList], __VERSION_INFO__);

export default AXAList;
