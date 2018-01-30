import { BaseComponentGlobal } from '../_abstract/component-types';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';
import HeaderMobileLanguages from './js/header-mobile-languages';

class AXAHeaderMobileLanguages extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    this.selectContext('axa-header');
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile-languages`;

    this.langugaes = new HeaderMobileLanguages(this);
  }

  contextCallback(contextNode) {
    this.langugaes.contextNode = contextNode;
  }

  disconnectedCallback() {
    this.langugaes.destroy();
    delete this.langugaes;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-mobile-languages', AXAHeaderMobileLanguages);
});

export default AXAHeaderMobileLanguages;
