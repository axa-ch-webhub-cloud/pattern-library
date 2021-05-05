import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
// eslint-disable-next-line import/no-extraneous-dependencies
import closeIcon from '@axa-ch/materials/icons/material-design/close.svg';

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
      forced: { type: Boolean },
      small: { type: Boolean },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    return html`
      <article class="o-modal ${this.open ? 'o-modal--open' : ''}">
        <div
          class="o-modal__container ${this.small
            ? 'o-modal__container--small'
            : ''}"
        >
          ${!this.forced
            ? html`
                <div
                  class="o-modal__upper-close-container ${this.forced
                    ? 'o-modal__upper-close-container--forced'
                    : ''}"
                >
                  <button
                    class="o-modal__upper-close-container-button"
                    @click="${this.closeModal}"
                  >
                    ${svg([closeIcon])}
                  </button>
                </div>
              `
            : ''}
          <div
            class="o-modal__content ${this.forced
              ? 'o-modal__content--forced'
              : ''}"
          >
            <slot></slot>
          </div>
        </div>
      </article>
    `;
  }

  closeModal() {
    const container = this.shadowRoot.querySelector('article > div').classList;
    const article = this.shadowRoot.querySelector('article').classList;

    container.add('o-modal__close--container');
    article.add('o-modal__close--background');
    setTimeout(() => {
      container.remove('o-modal__close--container');
      article.remove('o-modal__close--background');
      this.removeAttribute('open');
    }, 200);
  }

  firstUpdated() {
    // add eventListener to close modal when pressing outside the modal
    document.body.addEventListener('click', ev => {
      this.mouseCloseHandler(ev);
    });
    // add eventListener to close modal when pressing esc
    window.addEventListener('keydown', ev => {
      this.keyboardEscapeCloseHandler(ev);
    });
  }

  mouseCloseHandler(e) {
    if (
      !this.forced &&
      e.composedPath()?.[0] === this.shadowRoot.querySelector('.o-modal--open')
    ) {
      this.closeModal();
    }
  }

  keyboardEscapeCloseHandler(e) {
    if (
      !this.forced &&
      (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27)
    ) {
      this.closeModal();
    }
  }

  disconnectedCallback() {
    document.body.removeEventListener('click', this.handleWindowKeyDown);
    window.removeEventListener('keydown', this.keyboardEscapeCloseHandler);
  }
}

defineVersioned([AXAModal], __VERSION_INFO__);

export default AXAModal;
