import { BaseComponentGlobal } from '../_abstract/component-types';
import getAttribute from '../../js/get-attribute';
import on from '../../js/on';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

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
