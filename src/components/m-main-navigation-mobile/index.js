import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import MobileNavigation from './js/mobile-navigation';
import { domready } from '../../js/domready';

class MainNavigationMobile extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = 'm-main-navigation-mobile';

    this.interaction = new MobileNavigation(this);
  }

  disconnectedCallback() {
    this.interaction.destroy();
    delete this.interaction;
  }
}

domready(() => {
  window.customElements.define('axa-main-navigation-mobile', MainNavigationMobile);
});
