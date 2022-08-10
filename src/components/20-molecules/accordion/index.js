import { LitElement, html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import expandLess from '@axa-ch/materials/icons/material-design/expand_less.svg';
import expandMore from '@axa-ch/materials/icons/material-design/expand_more.svg';

import { classMap } from 'lit/directives/class-map.js';
import { defineVersioned } from '../../../utils/component-versioning';
import { sanitizeSVG } from '../../../utils/sanitize';
import applyDefaults from '../../../utils/apply-defaults';
import fireCustomEvent from '../../../utils/custom-event';
import createRefId from '../../../utils/create-ref-id';
import styles from './index.scss';

const collapseContent = el => {
  // get the height of the element's inner content, regardless of its actual size
  const contentHeight = el.scrollHeight;
  // temporarily disable all css transitions
  const elementTransition = el.style.transition;
  el.style.transition = '';

  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we
  // aren't transitioning out of 'auto'
  requestAnimationFrame(() => {
    el.style.height = `${contentHeight}px`;
    el.style.transition = elementTransition;

    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(() => {
      el.style.height = '0px';
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
    el.style.height = null;
  };

  // when the next css transition finishes (which should be the one we just triggered)
  el.addEventListener('transitionend', expandAnimation);
  // remove this event listener so it only gets triggered once
  el.removeEventListener('transitionend', expandAnimation);
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
      level: { type: String },
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
    const { open, title, small, disabled, icon } = this;
    const titleContainerClasses = {
      'm-accordion__header': true,
      'm-accordion__header--disabled': disabled,
    };
    const titleClasses = {
      'm-accordion__title': true,
      'm-accordion__title--small': small,
    };

    return html`
      <div class="m-accordion">
        <div
          class="${classMap(titleContainerClasses)}"
          aria-role="${this.level ? 'heading' : ''}"
          aria-level="${this.level ? this.level : ''}"
          @click="${this.toggleAccordion}"
        >
          <button
            id="${this.refId}"
            class="m-accordion__button"
            aria-expanded="${this.open}"
            aria-controls="${this.refId}-content"
            ?disabled="${this.disabled}"
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
          id="${this.refId}-content"
          role="region"
          aria-labelledby="${this.refId}"
          class="m-accordion__content ${open
            ? 'm-accordion__content--open'
            : ''}"
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}

defineVersioned([AXAAccordion], __VERSION_INFO__);

export default AXAAccordion;
