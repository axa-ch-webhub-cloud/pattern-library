import { BaseComponentGlobal } from '../_abstract/component-types';

class Footer extends BaseComponentGlobal {
  connectedCallback() {
    super.connectedCallback();

    this.className = 'o-footer';
  }
}

window.customElements.define('axa-footer', Footer);
