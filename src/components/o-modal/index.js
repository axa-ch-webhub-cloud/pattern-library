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
    isopen: PropTypes.bool
  };

  init() {
    super.init({ styles, template });
  }

  closeModal() {
    var modal = document.getElementById('modal-wrapper');
    modal.style.display = 'none';
  }

  static get observedAttributes() {
    return ['isopen'];
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('connected');

    const axaButtons = document.querySelectorAll('axa-button[data-modal-close]');
    if (axaButtons && axaButtons.length) {
      axaButtons.forEach(button => {
        button.onclick = this.closeModal;
      });
    }
  }

  willRenderCallback() {
    console.log('rendered callback');
    const { isopen } = this.props;

    console.log('open?', isopen);
    // const modal = document.getElementById('modal-wrapper');
    if (isopen) {
      console.log('yes open');
      console.log(isopen);
      const modal = document.getElementById('modal-wrapper');
      console.log(modal);
      // this.modal.setAttribute('isopen', true);
      if (modal) modal.style.display = 'block';
      // this.modal.style.display = 'block';
    } else console.log('no not open');
  }

  set isopen(value) {
    this.setAttribute('isopen', value);
  }

  get isopen() {
    return this.getAttribute('isopen');
  }
}

// defineOnce(AXAModal.tagName, AXAModal);

document.addEventListener('DOMContentLoaded', () => {
  defineOnce(AXAModal.tagName, AXAModal);
});

export default AXAModal;
