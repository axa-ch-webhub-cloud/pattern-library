import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import urlPropType from '../../js/prop-types/url-prop-type';

class AXALink extends BaseComponentGlobal {
  static tagName = 'axa-link'
  static propTypes = {
    color: PropTypes.oneOf(['red', 'white', 'blue']),
    size: PropTypes.oneOf(['']),
    motion: PropTypes.bool,
    arrow: PropTypes.bool,
    href: urlPropType,
    listed: PropTypes.bool,
    icon: PropTypes.string,
    deco: PropTypes.bool,
    iconsPathPrefix: PropTypes.string,
    target: PropTypes.oneOf(['_blank', '_self']),
  }

  init() {
    super.init({ styles, template });
  }
}

defineOnce(AXALink.tagName, AXALink);

export default AXALink;
