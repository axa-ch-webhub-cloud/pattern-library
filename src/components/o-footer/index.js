import BaseComponentGlobal from '../../js/abstract/base-component-global';

class AXAFooter extends BaseComponentGlobal {
  static tagName = 'axa-footer'

  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-footer`;
  }
}

window.customElements.define(AXAFooter.tagName, AXAFooter);

export default AXAFooter;
