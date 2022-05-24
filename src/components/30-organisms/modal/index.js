import { html, css, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html';
// eslint-disable-next-line import/no-extraneous-dependencies
import closeIcon from '@axa-ch/materials/icons/material-design/close.svg';

import { defineVersioned } from '../../../utils/component-versioning';
import { applyDefaults } from '../../../utils/with-react';
import fireCustomEvent from '../../../utils/custom-event';
import styles from './index.scss';
import InlineStyles from '../../../utils/inline-styles';
import childStyles from './child.scss';

class AXAModal extends InlineStyles {
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
      noheader: { type: Boolean },
      onClose: { type: Function, attribute: false },
    };
  }

  static get resetHeadingCss() {
    return childStyles;
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
          ${!this.forced && !this.noheader
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
                    ${unsafeHTML(closeIcon)}
                  </button>
                </div>
              `
            : ''}
          <div
            class="o-modal__content ${this.forced
              ? 'o-modal__content--forced'
              : ''} ${this.noheader ? 'o-modal__content--noheader' : ''}"
          >
            ${this.noheader
              ? html`
                  <button
                    class="o-modal__upper-close-container-button"
                    @click="${this.closeModal}"
                  >
                    ${unsafeHTML(closeIcon)}
                  </button>
                `
              : ''}
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
    this.onClose(fireCustomEvent('axa-close', null, this));
  }

  firstUpdated() {
    this.inlineStyles('resetHeadingCss');

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
