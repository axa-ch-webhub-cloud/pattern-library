/* eslint-disable import/no-extraneous-dependencies */
import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import expandLess from '@axa-ch/materials/icons/material-design/expand_less.svg';
import expandMore from '@axa-ch/materials/icons/material-design/expand_more.svg';

import { classMap } from 'lit-html/directives/class-map';
import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
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
      small: { type: Boolean, defaultValue: false },
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
    this.toggleAnimation();
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
      'm-accordeon__title-container--small': small,
      'm-accordeon__title-container--large': !small,
      'm-accordeon__title-container--disabled': disabled,
    };

    const iconClass = icon
      ? 'm-accordeon__title-container--title-icon'
      : 'm-accordeon__title-container--title-icon-hidden';

    const variant = small ? 'size-3' : '';
    const statusIcon = svg([open ? expandLess : expandMore]);

    const iconHTML = icon ? svg([icon]) : html``;
    return html`
      <article class="m-accordeon">
        <div class="m-accordeon__container">
          <div
            class="m-accordeon__title-container ${classMap(titleClasses)}"
            @click="${this.toggleAccordion}"
          >
            <div class="m-accordeon__title-container--title">
              <div class="${iconClass}">
                ${iconHTML}
              </div>
              <axa-text variant="${variant}">
                ${title}
              </axa-text>
            </div>
            <div class="m-accordeon__title-container--close">
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

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineVersioned([AXAAccordeon], __VERSION_INFO__);

export default AXAAccordeon;
