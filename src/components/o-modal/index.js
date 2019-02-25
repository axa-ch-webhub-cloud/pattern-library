import PropTypes from '../../js/prop-types';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXAModal extends BaseComponentGlobal {
  static tagName = 'axa-modal';
  static propTypes = {
    open: PropTypes.bool,
  };

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
    if (event.target === this.querySelector('.js-modal')) this.closeModal();
  }

  closeModalOnEsc(event) {
    const key = event.key || event.keyCode;
    if (key === 'Escape' || key === 'Esc' || key === 27) {
      this.closeModal();
    }
  }

  closeModalFunction = () => this.closeModal();
  closeModalByClickingOutsideFunction = (event) => this.closeModalByClickingOutside(event);
  closeModalOnEscFunction = (event) => this.closeModalOnEsc(event);

  init() {
    super.init({ styles, template });
  }

  static get observedAttributes() {
    return ['open'];
  }

  connectedCallback() {
    super.connectedCallback();

    const axaButtonsRaw = this.querySelectorAll('axa-button[data-modal-close]');
    const axaButtons = Array.from(axaButtonsRaw);
    if (axaButtons && axaButtons.length) {
      axaButtons.forEach((button) => {
        button.addEventListener('click', this.closeModalFunction);
      });
    }

    this.addEventListener('keyup', this.closeModalOnEscFunction);
    this.addEventListener('click', this.closeModalByClickingOutsideFunction);

    const closeButton = this.querySelector('.js-modal-close-button');
    closeButton.addEventListener('click', this.closeModalFunction);
  }

  disconnectedCallback() {
    this.removeEventListener('keyup');

    const axaButtons = this.querySelectorAll('axa-button[data-modal-close]');
    if (axaButtons && axaButtons.length) {
      axaButtons.forEach((button) => {
        button.removeEventListener('click', this.closeModal);
      });
    }

    const closeButton = this.querySelector('axa-icon[icon="cross-gap"]');
    closeButton.removeEventListener('click', this.closeModal);
  }
}

defineOnce(AXAModal.tagName, AXAModal);

export default AXAModal;
