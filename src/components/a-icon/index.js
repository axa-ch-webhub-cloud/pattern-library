import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAIcon extends BaseComponentGlobal {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() { return ['icon', 'classes']; }

  constructor() {
    super(styles, template);
  }
}

wcdomready(() => {
  window.customElements.define('axa-icon', AXAIcon);
});

export default AXAIcon;
