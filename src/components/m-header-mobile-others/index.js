import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';
import styles from './index.scss';
import template from './_template';

class AXAHeaderMobileOthers extends BaseComponentGlobal {
  static get observedAttributes() { return ['items']; }

  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile-others`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-mobile-others', AXAHeaderMobileOthers);
});

export default AXAHeaderMobileOthers;
