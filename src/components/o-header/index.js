import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';

import styles from './index.scss';

class AXAHeader extends BaseComponentGlobal {
  constructor() {
    super(styles);

    this.enableContext();
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-header`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header', AXAHeader);
});

export default AXAHeader;
