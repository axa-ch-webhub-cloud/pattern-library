import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAHeaderMobileLanguages extends BaseComponentGlobal {
  static tagName = 'axa-header-mobile-languages'

  static get observedAttributes() { return ['items']; }

  constructor() {
    super({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile-languages`;
  }
}

wcdomready(() => {
  window.customElements.define(AXAHeaderMobileLanguages.tagName, AXAHeaderMobileLanguages);
});

export default AXAHeaderMobileLanguages;
