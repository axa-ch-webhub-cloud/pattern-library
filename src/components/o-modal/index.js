// import PropTypes from "../../js/prop-types";
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

  init() {
    super.init({ styles, template });
  }

  closeModal() {
    var modal = document.getElementById('modal-wrapper');
    modal.style.display = 'none';
  }

  connectedCallback() {
    super.connectedCallback();

    const axaButtons = document.querySelectorAll(
      'axa-button[data-modal-close]'
    );
    if (axaButtons && axaButtons.length)
      axaButtons.forEach(button => {
        button.onclick = this.closeModal;
      });
  }
}

defineOnce(AXAModal.tagName, AXAModal);

export default AXAModal;
