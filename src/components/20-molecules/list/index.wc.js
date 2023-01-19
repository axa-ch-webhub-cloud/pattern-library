import { html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { defineVersioned } from '../../../utils/component-versioning.js';
import InlineStyles from '../../../utils/inline-styles.js';
import applyDefaults from '../../../utils/apply-defaults.js';
import styles from './index.scss';
import childStyles from './child.scss';

const variantClass = variant => {
  if (variant === 'ordered') {
    return 'm-list--ordered';
  }
  if (variant === 'icon') {
    return 'm-list--iconified';
  }
  if (variant === 'unstyled') {
    return 'm-list--unstyled';
  }
  return '';
};

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
      icon: { type: String },
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
      <${listTag} class="m-list ${variantClass(this.variant)}">
        <slot></slot>
      </${listTag}>
    `;

    return html` ${unsafeHTML(template)} `;
  }

  firstUpdated() {
    this.inlineStyles('resetHeadingCss');
  }

  updated() {
    if (this.variant === 'icon' && this.icon) {
      [...this.querySelectorAll('li')].forEach(li => {
        li.style.backgroundImage = `url('data:image/svg+xml;charset=UTF-8,${this.icon}')`;
      });
    }
  }
}

defineVersioned([AXAList], __VERSION_INFO__);

export default AXAList;
