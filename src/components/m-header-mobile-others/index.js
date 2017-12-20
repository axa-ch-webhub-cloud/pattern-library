import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';
import wcdomready from '../../js/wcdomready';

class AXAHeaderMobileOthers extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile-others`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-mobile-others', AXAHeaderMobileOthers);
});
