import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';

class Header extends BaseComponentGlobal {
  connectedCallback() {
    super.connectedCallback();

    this.className = 'o-header';
  }
}

domready(() => {
  window.customElements.define('axa-header', Header);
});
