import { BaseComponentGlobal } from '../_abstract/component-types';
import { wcdomready } from '../../js/wcdomready';

class AXAFooter extends BaseComponentGlobal {
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-footer`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-footer', AXAFooter);
});
