import { LitElement, html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import expandLess from '@axa-ch/materials/icons/material-design/expand_less.svg';
import expandMore from '@axa-ch/materials/icons/material-design/expand_more.svg';

import { classMap } from 'lit/directives/class-map.js';
import { defineVersioned } from '../../../utils/component-versioning';
import applyDefaults from '../../../utils/apply-defaults';
import { sanitizeSVG } from '../../../utils/sanitize';
import debounce from '../../../utils/debounce';

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
      large: { type: Boolean },
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
    // When changing the window size, we have to calculate and set the max-height of m-accordion__content again.
    this.recalculateDimensionsOnResize = debounce(this.toggleAnimation, 500);
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

    window.addEventListener('resize', this.recalculateDimensionsOnResize);

    this.toggleAnimation();
  }

  toggleAnimation() {
    const accordionContent = this.shadowRoot.querySelector(
      '.m-accordion__content'
    );

    if (!accordionContent) {
      return;
    }

    if (this.open) {
      accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
    } else {
      accordionContent.style.maxHeight = 0;
    }
  }

  render() {
    const { open, title, large, disabled, icon } = this;
    const titleContainerClasses = {
      'm-accordion__title-container': true,
      'm-accordion__title-container--disabled': disabled,
    };
    const titleClasses = {
      'm-accordion__title': true,
      'm-accordion__title--large': large,
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
    window.removeEventListener('resize', this.recalculateDimensionsOnResize);
  }
}

defineVersioned([AXAAccordion], __VERSION_INFO__);

export default AXAAccordion;
