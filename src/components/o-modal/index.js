import PropTypes from '../../js/prop-types';
// import classnames from "classnames";
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import urlPropType from "../../js/prop-types/url-prop-type";
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXAModal extends BaseComponentGlobal {
  static tagName = 'axa-modal';
  static propTypes = {
    open: PropTypes.bool
  };

  init() {
    super.init({ styles, template });
  }

  closeModal() {
    var modal = document.getElementById('modal-wrapper');
    modal.style.display = 'none';
  }

  static get observedAttributes() {
    return ['open'];
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('connected');

    const axaButtons = document.querySelectorAll(
      'axa-button[data-modal-close]'
    );
    if (axaButtons && axaButtons.length) {
      axaButtons.forEach(button => {
        button.onclick = this.closeModal;
      });
    }
  }

  willRenderCallback() {
    console.log('rendered callback');
    const { open } = this.props;

    console.log('open?', open);
    // const modal = document.getElementById('modal-wrapper');
    if (open) {
      console.log('yes open');
      console.log(open);
      const modal = document.getElementById('modal-wrapper');
      console.log(modal);
      // this.modal.setAttribute('open', true);
      if (modal) modal.style.display = 'block';
      // this.modal.style.display = 'block';
    } else console.log('no not open');
  }

  set open(value) {
    this.setAttribute('open', value);
  }

  get open() {
    return this.getAttribute('open');
  }
}

// defineOnce(AXAModal.tagName, AXAModal);

document.addEventListener('DOMContentLoaded', () => {
  defineOnce(AXAModal.tagName, AXAModal);
});

export default AXAModal;
