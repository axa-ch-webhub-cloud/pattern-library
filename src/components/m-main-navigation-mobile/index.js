import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import MobileNavigation from './js/mobile-navigation';
import getAttribute from '../../js/get-attribute';
import { domready } from '../../js/domready';

class MainNavigationMobile extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    const offCanvas = getAttribute(this, 'offcanvas');

    this.className = classnames('m-main-navigation-mobile', {
      'm-main-navigation-mobile--off-canvas': !offCanvas,
    });

    this.interaction = new MobileNavigation(this);
  }

  contextCallback(contextNode) {
    console.log(`contextCallback ${this.nodeName} from ${contextNode.nodeName}`);

    this.interaction.contextNode = contextNode;
  }

  disconnectedCallback() {
    this.interaction.destroy();
    delete this.interaction;
  }
}

domready(() => {
  window.customElements.define('axa-main-navigation-mobile', MainNavigationMobile);
});
