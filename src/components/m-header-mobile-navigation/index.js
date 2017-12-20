import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import wcdomready from '../../js/wcdomready';

class AXAHeaderMobileNavigation extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile-navigation`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-mobile-navigation', AXAHeaderMobileNavigation);
});
