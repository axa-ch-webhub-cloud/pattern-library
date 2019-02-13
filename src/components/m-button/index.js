import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';
import Button from './js/button';

class AXAButton extends BaseComponentGlobal {
  static tagName = 'axa-button';
  static propTypes = {
    arrow: PropTypes.bool,
    classes: PropTypes.string,
    color: PropTypes.oneOf(['red', 'white', 'blue']),
    ghost: PropTypes.bool,
    motion: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    tag: PropTypes.oneOf(['a', 'button']),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    href: urlPropType,
    icon: PropTypes.string,
    target: PropTypes.oneOf(['_blank', '_self']),
    disabled: PropTypes.bool,
  };

  init() {
    super.init({ styles, template });
  }

  didRenderCallback() {
    if (this.button) {
      this.button.destroy();
    }

    this.button = new Button(this);
  }

  disconnectedCallback() {
    if (this.button) {
      this.button.destroy();
      delete this.button;
    }
  }
}

defineOnce(AXAButton.tagName, AXAButton);

export default AXAButton;
