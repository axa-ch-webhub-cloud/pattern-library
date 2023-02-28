import { html, css, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import closeIcon from '@axa-ch/materials/icons/material-design/close.svg';

import { defineVersioned } from '../../../utils/component-versioning';
import applyDefaults from '../../../utils/apply-defaults';
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
    const { open, small, forced, noheader, closeModal } = this;
    const rootClasses = {
      'o-modal': true,
      'o-modal--open': open,
    };
    const containerClasses = {
      'o-modal__container': true,
      'o-modal__container--small': small,
    };
    const contentClasses = {
      'o-modal__content': true,
      'o-modal__content--forced': forced,
      'o-modal__content--noheader': noheader,
    };
    const closeClasses = {
      'o-modal__upper-close-container': true,
      'o-modal__upper-close-container--forced': forced,
    };

    return html`
      <article class="${classMap(rootClasses)}">
        <div class="${classMap(containerClasses)}">
          ${!forced && !noheader
            ? html`
                <div class="${classMap(closeClasses)}">
                  <button
                    class="o-modal__upper-close-container-button"
                    @click="${closeModal}"
                  >
                    ${unsafeHTML(closeIcon)}
                  </button>
                </div>
              `
            : ''}
          <div class="${classMap(contentClasses)}">
            ${noheader && !forced
              ? html`
                  <button
                    class="o-modal__upper-close-container-button"
                    @click="${closeModal}"
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

    // add eventListener to close modal when pressing clicking the modal.
    // we use "mousedown" instead of "click" here for UX reasons:
    // text selection can confuse the modal-close detection otherwise,
    // as follows. Selecting text inside the modal's content area via the
    // mouse button, then moving the cursor to the modal's backdrop and
    // releasing the mouse button generates a 'click' event on the modal's
    // backdrop!
    document.body.addEventListener('mousedown', ev => {
      this.mouseCloseHandler(ev);
    });
    // add eventListener to close modal when pressing esc
    window.addEventListener('keydown', ev => {
      this.keyboardEscapeCloseHandler(ev);
    });
  }

  mouseCloseHandler(e) {
    // WTF code worked earlier?
    if (
      !this.forced &&
      e.composedPath() &&
      e.composedPath()[0] === this.shadowRoot.querySelector('.o-modal--open')
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
