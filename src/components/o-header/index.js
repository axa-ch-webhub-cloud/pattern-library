import { BaseComponentGlobal } from '../_abstract/component-types';

class Header extends BaseComponentGlobal {
  connectedCallback() {
    super.connectedCallback();

    this.className = 'o-header';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.customElements.define('axa-header', Header);
}, false);
