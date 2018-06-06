import wcdomready from '../../js/wcdomready';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import template from './_template';
import styles from './index.scss';
import AccordionItem from './js/accordion-item';

class AXAAccordionItem extends BaseComponentGlobal {
  static tagName = 'axa-accordion-item'

  static get observedAttributes() { return ['icon', 'header', 'header-secondary', 'header-color', 'multiple']; }

  constructor() {
    super(styles, template);

    this.consumeContext('axa-accordion');
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-accordion-item`;

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
  window.customElements.define(AXAAccordionItem.tagName, AXAAccordionItem);
});

export default AXAAccordionItem;
