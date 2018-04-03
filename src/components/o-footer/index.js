import BaseComponentGlobal from 'js/abstract/base-component-global';
import wcdomready from 'js/wcdomready';

class AXAFooter extends BaseComponentGlobal {
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-footer`;
  }
}

wcdomready(() => {
  window.customElements.define('axa-footer', AXAFooter);
});

export default AXAFooter;
