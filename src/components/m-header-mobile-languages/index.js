import BaseComponentGlobal from '../../js/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAHeaderMobileLanguages extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile-languages`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-mobile-languages', AXAHeaderMobileLanguages);
});

export default AXAHeaderMobileLanguages;
