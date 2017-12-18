import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import MobileNavigation from './js/mobile-navigation';
import getAttribute from '../../js/get-attribute';
import { wcdomready } from '../../js/wcdomready';

class AXAMainNavigationMobile extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    this.selectContext('axa-header');
  }

  connectedCallback() {
    super.connectedCallback();

    const offCanvas = getAttribute(this, 'offcanvas');

    this.className = classnames(this.initialClassName, 'm-header-header-main-navigation-mobile', {
      'm-header-main-navigation-mobile--off-canvas': !offCanvas,
    });

    this.interaction = new MobileNavigation(this);
  }

  contextCallback(contextNode) {
    this.interaction.contextNode = contextNode;
  }

  disconnectedCallback() {
    this.interaction.destroy();
    delete this.interaction;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-main-navigation-mobile', AXAMainNavigationMobile);
});
