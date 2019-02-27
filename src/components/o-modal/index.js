import PropTypes from '../../js/prop-types';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';
import on from '../../js/on';
import { AXA_EVENTS, EVENTS } from '../../js/ui-events';

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
}

defineOnce(AXAModal.tagName, AXAModal);

export default AXAModal;
