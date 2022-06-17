/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import expandLess from '@axa-ch/materials/icons/material-design/expand_less.svg';
import expandMore from '@axa-ch/materials/icons/material-design/expand_more.svg';

import { classMap } from 'lit/directives/class-map.js';
import { defineVersioned } from '../../../utils/component-versioning';
import applyDefaults from '../../../utils/apply-defaults';
import { sanitizeSVG } from '../../../utils/sanitize';

import styles from './index.scss';

class AXAAccordeon extends LitElement {
  static get tagName() {
    return 'axa-accordeon';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      small: { type: Boolean },
      open: { type: Boolean },
      disabled: { type: Boolean },
      icon: { type: String },
      title: { type: String },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  toggleAccordion() {
    if (!this.disabled) {
      this.open = !this.open;
      this.toggleAnimation();
    }
  }

  firstUpdated() {
    this.getFirstChild().shadowRoot.querySelector(
      '.m-accordeon__container'
    ).style.borderTop = 'solid 1px #ccc';

    // slot-content is not available on IE 11 at this time
    if (window.document.documentMode) {
      setTimeout(() => {
        this.toggleAnimation();
      });
    } else {
      this.toggleAnimation();
    }
  }

  toggleAnimation() {
    const accordeonContent = this.shadowRoot.querySelector(
      '.m-accordeon__content'
    );

    if (this.open) {
      accordeonContent.style.maxHeight = `${accordeonContent.scrollHeight}px`;
    } else {
      accordeonContent.style.maxHeight = 0;
    }
  }

  render() {
    const { open, title, small, disabled, icon } = this;
    const titleClasses = {
      'm-accordeon__title-container--disabled': disabled,
    };

    const iconClass = icon
      ? 'm-accordeon__title-container-title-icon'
      : 'm-accordeon__title-container-title-icon--hidden';

    const statusIcon = unsafeHTML(open ? expandLess : expandMore);

    const iconHTML = icon ? unsafeHTML(sanitizeSVG(icon)) : html``;
    return html`
      <article class="m-accordeon">
        <div class="m-accordeon__container">
          <div
            class="m-accordeon__title-container ${classMap(titleClasses)}"
            @click="${this.toggleAccordion}"
          >
            <div class="m-accordeon__title-container-title">
              <div class="${iconClass}">${iconHTML}</div>
              <axa-text variant="${small ? 'size-3' : ''}"> ${title} </axa-text>
            </div>
            <div class="m-accordeon__title-container--closed">
              ${statusIcon}
            </div>
          </div>
          <div
            class="m-accordeon__content ${open
              ? 'm-accordeon__content--open'
              : ''}"
          >
            <slot></slot>
          </div>
        </div>
      </article>
    `;
  }

  getFirstChild() {
    return Array.prototype.slice
      .call(this.parentNode.querySelectorAll('*'))
      .find(el => {
        return el.tagName.toLowerCase().includes('axa-accordeon');
      });
  }
}

defineVersioned([AXAAccordeon], __VERSION_INFO__);

export default AXAAccordeon;
