import { LitElement, html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
  Expand_lessSvg as expandLess,
  Expand_moreSvg as expandMore,
} from '@axa-ch/materials/icons/material-design';

import { classMap } from 'lit/directives/class-map.js';
import { defineVersioned } from '../../../utils/component-versioning.js';
import { sanitizeSVG } from '../../../utils/sanitize.js';
import applyDefaults from '../../../utils/apply-defaults.js';
import fireCustomEvent from '../../../utils/custom-event.js';
import createRefId from '../../../utils/create-ref-id.js';
import styles from './index.scss';

const collapseContent = el => {
  // get the height of the element's inner content, regardless of its actual size
  const contentHeight = el.scrollHeight;
  // temporarily disable all css transitions
  const savedTransition = el.style.transition;
  el.style.transition = '';

  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we
  // aren't transitioning out of 'height: auto'.
  requestAnimationFrame(() => {
    el.style.height = `${contentHeight}px`;
    el.style.transition = savedTransition;

    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(() => {
      el.style.height = 0;
    });
  });
};

const expandContent = el => {
  // get the height of the element's inner content, regardless of its actual size
  const contentHeight = el.scrollHeight;
  // have the element transition to the height of its inner content
  el.style.height = `${contentHeight}px`;

  const expandAnimation = () => {
    // remove "height" from the element's inline styles, so it can return to its initial value
    el.style.removeProperty('height');
  };

  // when the next CSS transition finishes (which should be the one we just triggered)
  el.addEventListener('transitionend', expandAnimation, { once: true });
};

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
      refId: { type: String, defaultValue: `accordion-${createRefId()}` },
      small: { type: Boolean },
      ariaLevel: { type: String },
      open: { type: Boolean },
      disabled: { type: Boolean },
      icon: { type: String },
      title: { type: String },
      onStateChange: { type: Function, attribute: false },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion() {
    const accordionContent = this.shadowRoot.querySelector(
      '.m-accordion__content'
    );

    if (!accordionContent || this.disabled) {
      return;
    }

    if (this.open) {
      collapseContent(accordionContent);
    } else {
      expandContent(accordionContent);
    }

    this.open = !this.open;
    this.onStateChange(this.open);
    fireCustomEvent('axa-state-change', this.open, this);
  }

  render() {
    const { refId, open, title, small, disabled, icon, ariaLevel = '' } = this;
    const titleContainerClasses = {
      'm-accordion__header': true,
      'm-accordion__header--disabled': disabled,
    };
    const titleClasses = {
      'm-accordion__title': true,
      'm-accordion__title--small': small,
    };
    const contentClasses = {
      'm-accordion__content': true,
      'm-accordion__content--open': open,
    };

    return html`
      <div class="m-accordion">
        <div
          class="${classMap(titleContainerClasses)}"
          aria-role="${ariaLevel ? 'heading' : ''}"
          aria-level="${ariaLevel}"
          @click="${this.toggleAccordion}"
        >
          <button
            id="${refId}"
            class="m-accordion__button"
            aria-expanded="${open}"
            aria-controls="${refId}-content"
            ?disabled="${disabled}"
          >
            <div class="m-accordion__button-flex-wrapper">
              <div class="m-accordion__button-title-wrapper">
                ${icon
                  ? html`<div class="m-accordion__icon">
                      ${unsafeHTML(sanitizeSVG(icon))}
                    </div>`
                  : html``}
                <span class="${classMap(titleClasses)}">${title}</span>
              </div>
              <div class="m-accordion__icon-expand">
                ${unsafeHTML(open ? expandLess : expandMore)}
              </div>
            </div>
          </button>
        </div>
        <div
          id="${refId}-content"
          role="region"
          aria-labelledby="${refId}"
          class="${classMap(contentClasses)}"
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}

defineVersioned([AXAAccordion], __VERSION_INFO__);

export default AXAAccordion;
