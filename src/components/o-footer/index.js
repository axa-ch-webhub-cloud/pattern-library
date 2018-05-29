import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

class AXAFooter extends BaseComponentGlobal {
  static tagName = 'axa-footer'

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-footer`;
  }
}

wcdomready(() => {
  window.customElements.define(AXAFooter.tagName, AXAFooter);
});

export default AXAFooter;
