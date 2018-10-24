import PropTypes from '../../js/prop-types';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import styles from './index.scss';
import template from './_template';

class AXAIcon extends BaseComponentGlobal {
  static tagName = 'axa-icon'
  static propTypes = {
    icon: PropTypes.string.isRequired,
    classes: PropTypes.string,
    pathPrefix: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
  }

  constructor() {
    super({ styles, template });
  }

  willRenderCallback() {
    this.className = 'a-icon__root';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  defineOnce(AXAIcon.tagName, AXAIcon);
});

export default AXAIcon;
