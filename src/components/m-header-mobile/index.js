import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';
import HeaderMobile from './js/header-mobile';

class AXAHeaderMobile extends BaseComponentGlobal {
  static get observedAttributes() { return ['offcanvas']; }

  constructor() {
    super(styles, template);

    this.selectContext('axa-header');
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-header-mobile`;
  }

  contextCallback(contextNode) {
    if (this.interaction) {
      this.interaction.contextNode = contextNode;
    }
  }

  didRenderCallback() {
    if (this.interaction) {
      this.interaction.destroy();
    }

    this.interaction = new HeaderMobile(this);

    const { contextNode } = this;

    if (contextNode) {
      this.contextCallback(contextNode);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.interaction) {
      this.interaction.destroy();
      delete this.interaction;
    }
  }
}

wcdomready(() => {
  window.customElements.define('axa-header-mobile', AXAHeaderMobile);
});

export default AXAHeaderMobile;
