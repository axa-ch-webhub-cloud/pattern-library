import { LitElement, html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import expandLess from '@axa-ch/materials/icons/material-design/expand_less.svg';
import expandMore from '@axa-ch/materials/icons/material-design/expand_more.svg';

import { classMap } from 'lit/directives/class-map.js';
import { defineVersioned } from '../../../utils/component-versioning';
import applyDefaults from '../../../utils/apply-defaults';
import { sanitizeSVG } from '../../../utils/sanitize';
import styles from './index.scss';

class AXAAccordion extends LitElement {
  static get tagName() {
    return 'axa-accordion';
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
    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  toggleAccordion() {
    if (!this.disabled) {
      this.open = !this.open;
      this.toggleAnimation();
    }
  }

  firstUpdated() {
    this.getFirstChild().shadowRoot.querySelector(
      '.m-accordion__container'
    ).style.borderTop = 'solid 1px #ccc';

    // When changing the window size, we have to calculate and set the max-height of m-accordion__content again.
    window.addEventListener('resize', this.toggleAnimation);

    this.toggleAnimation();
  }

  toggleAnimation() {
    const accordionContent = this.shadowRoot.querySelector(
      '.m-accordion__content'
    );

    if (!accordionContent) {
      return;
    }

    accordionContent.style.maxHeight = this.open
      ? `${accordionContent.scrollHeight}px`
      : 0;
  }

  render() {
    const { open, title, small, disabled, icon } = this;
    const titleContainerClasses = {
      'm-accordion__title-container': true,
      'm-accordion__title-container--disabled': disabled,
    };
    const titleClasses = {
      'm-accordion__title': true,
      'm-accordion__title--small': small,
    };

    const iconClass = icon
      ? 'm-accordion__title-container-title-icon'
      : 'm-accordion__title-container-title-icon--hidden';

    const statusIcon = unsafeHTML(open ? expandLess : expandMore);

    const iconHTML = icon ? unsafeHTML(sanitizeSVG(icon)) : html``;
    return html`
      <article class="m-accordion">
        <div class="m-accordion__container">
          <div
            class="${classMap(titleContainerClasses)}"
            @click="${this.toggleAccordion}"
          >
            <div class="m-accordion__title-container-title">
              <div class="${iconClass}">${iconHTML}</div>
              <span class="${classMap(titleClasses)}">${title}</span>
            </div>
            <div class="m-accordion__title-container--closed">
              ${statusIcon}
            </div>
          </div>
          <div
            class="m-accordion__content ${open
              ? 'm-accordion__content--open'
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
        return el.tagName.toLowerCase().includes('axa-accordion');
      });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('resize', this.toggleAnimation);
  }
}

defineVersioned([AXAAccordion], __VERSION_INFO__);

export default AXAAccordion;
