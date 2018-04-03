import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

class AXATypo extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} a-typo`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-typo', AXATypo);
});

export default AXATypo;
