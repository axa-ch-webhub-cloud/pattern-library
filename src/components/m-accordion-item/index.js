import { BaseComponentGlobal } from '../_abstract/component-types';
import CustomEvent from '../../js/custom-event';
import on from '../../js/on';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAAccordionItem extends BaseComponentGlobal {

  constructor() {
    super(styles, template);

    // does this provide context (See docs for context) ?
    // this.enableContext()

    // or do you want to consume a specific context
    // this.selectContext('axa-context-provider');
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-accordion-item`;

    const header = this.querySelector('.m-accordion-item__header');
    console.log('test: ')

    console.log(header)

    on(header, 'click', (event) => {
      event.stopPropagation();
      event.preventDefault();

      this.dispatchEvent(new CustomEvent('accordion-item-opened'));
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Don't forget to cleanup :)
  }

  // Do you consume context?
  // contextCallback(contextNode) {
  //   contextNode is now available.
  // }
}

wcdomready(() => {
  window.customElements.define('axa-accordion-item', AXAAccordionItem);
});

export default AXAAccordionItem;
