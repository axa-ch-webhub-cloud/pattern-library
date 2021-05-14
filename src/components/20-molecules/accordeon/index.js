import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { unsafeSVG } from 'lit-html/directives/unsafe-svg';

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
      size: { type: String, defaultValue: 'small' },
      title: { type: String },
      icon: { type: String },
      isOpen: { type: boolean, defaultValue: false },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  expandAccordeon() {
    if (this.isOpen) {
      this.isOpen = false;
    } else {
      this.isOpen = true;
    }
  }

  render() {
    const titleClasses = {
      'm-accordeon__title--small': this.size === 'small',
      'm-accordeon__title--large': this.size === 'large',
      'm-accordeon__title--disabled': this.disabled,
    };

    const { icon } = this;

    return html`
      <article class="m-accordeon">
        <div class="m-accordeon__container">
          <div
            class="m-accordeon__title ${classMap(titleClasses)}"
            @click="${this.expandAccordeon}"
          >
            <div class="m-accordeon__title--container-title">
              ${unsafeSVG(icon)}
              <axa-text variant="${this.size === 'small' ? 'size-3' : ''}"
                >${this.title}</axa-text
              >
            </div>
            <div class="m-accordeon__title--close">
              ${this.isOpen ? svg([expandLess]) : svg([expandMore])}
            </div>
          </div>
          <div
            class="${this.isOpen
              ? 'm-accordeon__content--open'
              : 'm-accordeon__content'}"
          >
            <slot></slot>
          </div>
        </div>
      </article>
    `;
  }

  updated() {
    console.log(this.icon);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineVersioned([AXAAccordeon], __VERSION_INFO__);

export default AXAAccordeon;
