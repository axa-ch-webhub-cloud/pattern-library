import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

import DisclaimerHandler from './js/disclaimer-handler';

class AXACookieDisclaimer extends BaseComponentGlobal {
  static tagName = 'axa-cookie-disclaimer'
  static PropTypes = {
    classes: PropTypes.string,
    buttonName: PropTypes.string,
    title: PropTypes.string,
    fixed: PropTypes.bool,
  }

  constructor() {
    super({ styles, template });

    this.disclaimerHandler = new DisclaimerHandler(this);
    // does this provide context (See docs for context) ?
    // this.provideContext()

    // or do you want to consume a specific context
    // this.consumeContext('axa-context-provider');
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

    this.disclaimerHandler.destroy();
    delete this.disclaimerHandler;
  }

  render() {
    if (this.disclaimerHandler.hasAccepted()) {
      this.disclaimerHandler.cleanupWcNode();
    } else {
      super.render();
    }
  }

  // Do you consume context?
  // contextCallback(contextNode) {
  //   contextNode is now available.
  // }
  didRenderCallback() {
    this.disclaimerHandler.init();
  }
}

defineOnce(AXACookieDisclaimer.tagName, AXACookieDisclaimer);

export default AXACookieDisclaimer;
