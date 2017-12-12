import { BaseComponentGlobal } from '../_abstract/component-types';
import { domready } from '../../js/domready';

class AXAFooter extends BaseComponentGlobal {
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-footer`;
  }
}

domready(() => {
  window.customElements.define('axa-footer', AXAFooter);
});
