import wcdomready from '../../js/wcdomready';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import template from './_template';
import styles from './index.scss';

class AXAAccordion extends BaseComponentGlobal {
  static tagName = 'axa-accordion'

  constructor() {
    super(styles, template);

    this.enableContext();
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-accordion js-accordion`;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

wcdomready(() => {
  window.customElements.define(AXAAccordion.tagName, AXAAccordion);
});

export default AXAAccordion;
