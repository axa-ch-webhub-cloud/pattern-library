import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXACookieDisclaimer extends BaseComponentGlobal {
  static tagName = 'axa-cookie-disclaimer'

  // Specify observed attributes so that attributeChangedCallback will work,
  // this is essential for external re-rendering trigger.
  static get observedAttributes() { return ['classes', 'button-name', 'title', 'href', 'link-title', 'fixed']; }

  constructor() {
    super(styles, template);

    // does this provide context (See docs for context) ?
    // this.enableContext()

    // or do you want to consume a specific context
    // this.selectContext('axa-context-provider');
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} o-cookie-disclaimer`;
    // Your DOM interaction here, but keep it decoupled.
    // If you don't have any, just remove this function
  }

  // You have some special logic? Or need to update the web-components DOM node itself?
  // Then don't forget to make sure that incremental rendering works properly.
  // attributeChangedCallback(name, oldValue, newValue) {
  //   super.attributeChangedCallback(name, oldValue, newValue);
  // }

  // You may want to update stuff before rendering.
  // willRenderCallback(initial) {
  // }

  // You may want to update staff after rendering
  // didRenderCallback(initial) {
  // }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Don't forget to cleanup :)
  }

  // Do you consume context?
  // contextCallback(contextNode) {
  //   contextNode is now available.
  // }
}

wcdomready(() => {
  window.customElements.define(AXACookieDisclaimer.tagName, AXACookieDisclaimer);
});

export default AXACookieDisclaimer;
