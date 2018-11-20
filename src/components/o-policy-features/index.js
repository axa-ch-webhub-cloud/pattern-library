import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXAPolicyFeatures extends BaseComponentGlobal {
  static tagName = 'axa-policy-features'
  static propTypes = {
    axaStyle: PropTypes.oneOf(['default', 'dark-indigo', 'axa-blue', 'wild-sand', 'white']),
    title: PropTypes.string,
  }

  init() {
    super.init({
      styles, template,
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.className = classnames(this.initialClassName, 'o-policy-features');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

defineOnce(AXAPolicyFeatures.tagName, AXAPolicyFeatures);

export default AXAPolicyFeatures;
