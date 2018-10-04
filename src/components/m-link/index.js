import PropTypes from 'prop-types';

import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';

class AXALink extends BaseComponentGlobal {
  static tagName = 'axa-link'
  static propTypes = {
    color: PropTypes.oneOf(['red', 'white']),
    size: PropTypes.oneOf(['']),
    motion: PropTypes.bool,
    arrow: PropTypes.bool,
    href: PropTypes.string,
    listed: PropTypes.bool,
    icon: PropTypes.string,
    deco: PropTypes.bool,
    iconsPathPrefix: PropTypes.string,
    target: PropTypes.oneOf(['_blank', '_self']),
  }

  constructor() {
    super({ styles, template });
  }
}

defineOnce(AXALink.tagName, AXALink);

export default AXALink;
