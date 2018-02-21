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
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-accordion`;

    const accordionItems = [...this.getAllAccordionItems()];

    if (!accordionItems || accordionItems.length === 0) {
      throw new Error(`No axa-accordion-item found inside ${this}!`);
    }

    accordionItems.forEach((item) => {
      on(item, 'accordion-item-opened', (event) => {
        this.accordionItemToggled(event);
      });
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  accordionItemToggled(event) {
    event.stopPropagation();
    event.preventDefault();

    const accordionItems = [...this.getAllAccordionItems()];

    const multiple = getAttribute(this, 'multiple');
    if (!multiple) {
      accordionItems.forEach((item) => {
        if (event.target === item) {
          item.setAttribute('open', true);
        } else {
          item.removeAttribute('open');
        }
      });
    }
  }

  getOpenAccordionItems() {
    return [...this.getAllAccordionItems()].filter(item => getAttribute(item, 'open'));
  }

  getAllAccordionItems() {
    return this.querySelectorAll('axa-accordion-item');
  }


}

wcdomready(() => {
  window.customElements.define('axa-accordion', AXAAccordion);
});

export default AXAAccordion;
