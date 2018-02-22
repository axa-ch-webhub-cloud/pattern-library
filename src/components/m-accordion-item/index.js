import { BaseComponentGlobal } from '../_abstract/component-types';
import CustomEvent from '../../js/custom-event';
import on from '../../js/on';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';
import AccordionItem from './js/accordion-item';

class AXAAccordionItem extends BaseComponentGlobal {

  constructor() {
    super(styles, template);

    this.selectContext('axa-accordion');
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-accordion-item js-accordion-item`;

    this.interaction = new AccordionItem(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Don't forget to cleanup :)
  }

  contextCallback(contextNode) {
    this.interaction.contextNode = contextNode;
  }
}

wcdomready(() => {
  window.customElements.define('axa-accordion-item', AXAAccordionItem);
});

export default AXAAccordionItem;
