import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import HeaderMobileNavigation from './js/header-mobile-navigation';
import wcdomready from '../../js/wcdomready';

class AXAHeaderMobileNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    this.selectContext('axa-header');
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile-navigation`;

    this.interaction = new HeaderMobileNavigation(this);
  }

  contextCallback(contextNode) {
    this.interaction.contextNode = contextNode;
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.interaction.destroy();
    delete this.interaction;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-mobile-navigation', AXAHeaderMobileNavigation);
});
