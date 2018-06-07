import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

class AXAHeaderMobileOthers extends BaseComponentGlobal {
  static tagName = 'axa-header-mobile-others'

  static get observedAttributes() { return ['items']; }

  constructor() {
    super({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile-others`;
  }
}

wcdomready(() => {
  window.customElements.define(AXAHeaderMobileOthers.tagName, AXAHeaderMobileOthers);
});

export default AXAHeaderMobileOthers;
