import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';

class Footer extends BaseComponentGlobal {
  connectedCallback() {
    super.connectedCallback();

    this.className = 'o-footer';
  }
}

domready(() => {
  window.customElements.define('axa-footer', Footer);
});
