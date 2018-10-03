import PropTypes from 'prop-types';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXAContainer extends BaseComponentGlobal {
  static tagName = 'axa-container'
  static propTypes = {
    fluid: PropTypes.bool,
    classes: PropTypes.string,
  }

  static get observedAttributes() { return ['fluid', 'classes']; }

  constructor() {
    super({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-container`;
  }
}

defineOnce(AXAContainer.tagName, AXAContainer);

export default AXAContainer;
