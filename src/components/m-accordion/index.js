import wcdomready from '../../js/wcdomready';
import BaseComponentGlobal from '../../js/base-component-global';
import template from './_template';
import styles from './index.scss';

class AXAAccordion extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    this.enableContext();
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-accordion js-accordion`;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

wcdomready(() => {
  window.customElements.define('axa-accordion', AXAAccordion);
});

export default AXAAccordion;
