import wcdomready from '../../js/wcdomready';
import { BaseComponentGlobal } from '../_abstract/component-types';
import template from './_template';
import styles from './index.scss';
import AccordionItem from './js/accordion-item';

class AXAAccordionItem extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    this.selectContext('axa-accordion');
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-accordion-item js-accordion-item`;

    this.interaction = new AccordionItem(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.interaction.destroy();
    delete this.interaction;
  }

  contextCallback(contextNode) {
    this.interaction.contextNode = contextNode;
  }
}

wcdomready(() => {
  window.customElements.define('axa-accordion-item', AXAAccordionItem);
});

export default AXAAccordionItem;
