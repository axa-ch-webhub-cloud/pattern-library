import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXAFormOptionBox extends BaseComponentGlobal {
  static tagName = 'axa-form-option-box';

  static propTypes = {
    classes: PropTypes.string,
    iconName: PropTypes.string,
    headline: PropTypes.string,
    description: PropTypes.string,
    buttonTitle: PropTypes.string,
    href: PropTypes.string,
  };

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();
    this.className = `o-form-option-box ${this.classes ? this.classes : ''}`;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineOnce(AXAFormOptionBox.tagName, AXAFormOptionBox);

export default AXAFormOptionBox;
