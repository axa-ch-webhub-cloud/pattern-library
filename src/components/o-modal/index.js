import PropTypes from '../../js/prop-types';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';
import on from '../../js/on';
import debounce from '../../js/debounce';
import ownerWindow from '../../js/owner-window';
import { EVENTS } from '../../js/ui-events';

class AXAModal extends BaseComponentGlobal {
  static tagName = 'axa-modal';
  static propTypes = {
    open: PropTypes.bool,
  };

  static get observedAttributes() {
    return ['open'];
  }

  set open(value) {
    this.setAttribute('open', value);
  }

  get open() {
    return this.getAttribute('open');
  }

  closeModal() {
    this.removeAttribute('open');
  }

  closeModalByClickingOutside(event) {
    if (event.target === this.querySelector('.js-modal')) {
      this.closeModal();
    }
  }

  closeModalOnEsc(event) {
    const key = event.key || event.keyCode;
    if (key === 'Escape' || key === 'Esc' || key === 27) {
      this.closeModal();
    }
  }

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    // FOUC workaround
    this.style.removeProperty('display');

    this.closeModalOnEscFunction = event => this.closeModalOnEsc(event);
    const closeModalFunction = () => this.closeModal();

    const axaButtonsRaw = this.querySelectorAll('axa-button[data-modal-close]');
    const axaButtons = Array.from(axaButtonsRaw);
    if (axaButtons && axaButtons.length) {
      axaButtons.forEach(button => button.addEventListener('click', closeModalFunction));
    }

    this.onEscReleased = on(document, EVENTS.KEYUP, this.closeModalOnEscFunction);

    this.addEventListener('click', event => this.closeModalByClickingOutside(event));

    const closeButton = this.querySelector('.js-modal-close-button');
    closeButton.addEventListener('click', closeModalFunction);
  }

  disconnectedCallback() {
    this.onEscReleased();
  }

  didRenderCallback(...args) {
    super.didRenderCallback(...args);
    this._setMarginTop();
    if (this._unResize) {
      this._unResize();
    }
    this._unResize = on(ownerWindow(this), EVENTS.RESIZE, debounce(() => {
      this._setMarginTop();
    }, 300));
  }

  _setMarginTop() {
    const contentElement = this.querySelector('.js-modal .js-modal__content');
    const { offsetHeight, style: contentElementStyle } = contentElement;
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    if (offsetHeight && vh) {
      const marginTopBottom = (vh - offsetHeight) / 2;

      if (marginTopBottom > 0) {
        contentElementStyle.marginTop = `${marginTopBottom}px`;
      } else {
        contentElementStyle.marginTop = '0px';
      }
    }
  }
}

defineOnce(AXAModal.tagName, AXAModal);

export default AXAModal;
