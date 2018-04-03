import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXAContainer extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

wcdomready(() => {
  window.customElements.define('axa-container', AXAContainer);
});

export default AXAContainer;
