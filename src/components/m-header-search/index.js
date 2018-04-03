import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXAHeaderSearch extends BaseComponentGlobal {
  static get observedAttributes() { return ['action', 'href', 'method']; }

  constructor() {
    super(styles, template);
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-search`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-search', AXAHeaderSearch);
});

export default AXAHeaderSearch;
