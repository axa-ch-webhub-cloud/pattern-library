import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import Burger from './js/burger';

class AXAHeaderBurger extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    this.selectContext('axa-header');
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-burger`;
    this.burger = new Burger(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.burger.destroy();
    delete this.burger;
  }

  contextCallback(contextNode) {
    this.burger.contextNode = contextNode;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-burger', AXAHeaderBurger);
});

export default AXAHeaderBurger;
