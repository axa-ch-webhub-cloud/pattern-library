import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

/* eslint-disable import/no-extraneous-dependencies */
import expandLess from '@axa-ch/materials/icons/material-design/expand_less.svg';
/* eslint-disable import/no-extraneous-dependencies */
import expandMore from '@axa-ch/materials/icons/material-design/expand_more.svg';

import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';
import { boolean } from '@storybook/addon-knobs';

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
      disabled: { type: Boolean },
      small: { type: Boolean, defaultValue: false },
      title: { type: String },
      icon: { type: String },
      isOpen: { type: boolean, defaultValue: false },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

  render() {
    const { isOpen, title, small, disabled, icon } = this;
    const titleClasses = {
      'm-accordeon__title-container--small': small,
      'm-accordeon__title-container--large': !small,
      'm-accordeon__title-container--disabled': disabled,
    };
    const openClasses = {
      'm-accordeon__content--open': isOpen,
      'm-accordeon__content': !isOpen,
    };

    const iconClass = icon
      ? 'm-accordeon__title-container--title-icon'
      : 'm-accordeon__title-container--title-icon-hidden';

    const variant = small ? 'size-3' : '';
    const statusIcon = svg([isOpen ? expandLess : expandMore]);

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
          <div class="${classMap(openClasses)}">
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
