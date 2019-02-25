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
        button.addEventListener('click', () => {
          this.closeModal();
        });
      });
    }

    const modal = this.querySelector('.m-modal');
    modal.addEventListener('keyup', (event) => {
      this.closeModalOnEsc(event);
    });
    modal.addEventListener('click', (event) => {
      this.closeModalByClickingOutside(event);
    });

    const closeButton = this.querySelector('axa-icon[icon="cross-gap"]');
    closeButton.addEventListener('click', () => {
      this.closeModal();
    });
  }

  disconnectedCallback() {
    this.removeEventListener('keyup');

    const axaButtons = this.querySelectorAll('axa-button[data-modal-close]');
    if (axaButtons && axaButtons.length) {
      axaButtons.forEach((button) => {
        button.removeEventListener('click', () => {
          this.closeModal();
        });
      });
    }
  }

  closeModalByClickingOutside(event) {
    if (event.target === this.querySelector('.m-modal')) this.closeModal();
  }

  closeModal() {
    const modal = this.querySelector('.m-modal');
    modal.classList.add('m-modal--hidden');
  }

  closeModalOnEsc(event) {
    const key = event.key || event.keyCode;
    if (key === 'Escape' || key === 'Esc' || key === 27) {
      this.closeModal();
    }
  }

  set open(value) {
    this.setAttribute('open', value);
  }

  get open() {
    return this.getAttribute('open');
  }
}

defineOnce(AXAModal.tagName, AXAModal);

export default AXAModal;
