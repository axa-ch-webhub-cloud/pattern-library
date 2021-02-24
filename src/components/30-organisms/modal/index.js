import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
// eslint-disable-next-line import/no-extraneous-dependencies
import closeIcon from '@axa-ch/materials/internal-icons/close.svg';

import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';

class AXAModal extends LitElement {
  static get tagName() {
    return 'axa-modal';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  static get properties() {
    return {
      open: { type: Boolean },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    const classes = {
      'o-modal--open': this.open,
    };
    return html`
      <article class="o-modal ${classMap(classes)}">
        <div class="o-modal-window">
          <div class="o-modal-window__close-button" @click="${this.closeModal}">
            ${svg([closeIcon])}
          </div>
          <slot></slot>
          <div class="o-modal-window__close-container">
            <axa-button
              class="o-modal-window__close-container-button"
              @click="${this.closeModal}"
              >Schliessen</axa-button
            >
          </div>
        </div>
      </article>
    `;
  }

  closeModal() {
    this.removeAttribute('open');
  }

  firstUpdated() {
    document.querySelector('body').addEventListener('click', e => {
      if (e.path[0] === this.shadowRoot.querySelector('.o-modal--open')) {
        this.closeModal();
      }
    });

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
        this.closeModal();
      }
    });
  }
}

/* eslint-disable no-undef */
defineVersioned([AXAModal], __VERSION_INFO__);

export default AXAModal;
