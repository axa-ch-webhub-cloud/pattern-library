import PropTypes from 'prop-types';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXAHeaderOthers extends BaseComponentGlobal {
  static tagName = 'axa-header-others'
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
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

    this.className = `${this.initialClassName} m-header-others`;
  }
}

defineOnce(AXAHeaderOthers.tagName, AXAHeaderOthers);

export default AXAHeaderOthers;
