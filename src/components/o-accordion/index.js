import wcdomready from '../../js/wcdomready';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import template from './_template';

class AXAAccordion extends BaseComponentGlobal {
  constructor() {
    super('', template);

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
