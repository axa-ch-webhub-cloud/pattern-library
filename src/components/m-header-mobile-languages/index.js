import PropTypes from 'prop-types';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXAHeaderMobileLanguages extends BaseComponentGlobal {
  static tagName = 'axa-header-mobile-languages'
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      code: PropTypes.string,
      isActive: PropTypes.bool,
    })),
  }

  static get observedAttributes() {
    return ['items'];
  }

  constructor() {
    super({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile-languages`;
  }
}

defineOnce(AXAHeaderMobileLanguages.tagName, AXAHeaderMobileLanguages);

export default AXAHeaderMobileLanguages;
