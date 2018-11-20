import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import template from './_template';
import styles from './index.scss';
import AccordionItem from './js/accordion-item';

class AXAAccordionItem extends BaseComponentGlobal {
  static tagName = 'axa-accordion-item'
  static propTypes = {
    icon: PropTypes.string,
    header: PropTypes.string,
    headerSecondary: PropTypes.string,
    headerColor: PropTypes.oneOf(['blue']),
    multiple: PropTypes.bool,
  }

  init() {
    super.init({ styles, template });

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

defineOnce(AXAAccordionItem.tagName, AXAAccordionItem);

export default AXAAccordionItem;
