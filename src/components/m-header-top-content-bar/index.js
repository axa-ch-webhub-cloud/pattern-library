import PropTypes from '../../js/prop-types';

import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';

class AXAHeaderTopContentBar extends BaseComponentGlobal {
  static tagName = 'axa-header-top-content-bar'
  static propTypes = {
    type: PropTypes.oneOf(['corporate', 'commercial', 'warning']),
  }

  constructor() {
    super({ styles, template });
  }

  willRenderCallback() {
    const { type } = this;

    this.className = `${this.initialClassName} m-header-top-content-bar m-header-top-content-bar--${type}`;
  }
}

defineOnce(AXAHeaderTopContentBar.tagName, AXAHeaderTopContentBar);

export default AXAHeaderTopContentBar;
