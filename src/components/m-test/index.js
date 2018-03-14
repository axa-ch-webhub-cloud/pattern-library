import { BaseComponentGlobal } from '../_abstract/component-types';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXATest extends BaseComponentGlobal {
  constructor() {
    super(styles, template);

    console.log(`constructor -> ${this.nodeName}`);

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

    console.log(`connectedCallback -> ${this.nodeName}`);

    this.className = `${this.initialClassName} m-test`;
    // Your DOM interaction here, but keep it decoupled.
    // If you don't have any, just remove this function
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    console.log(`disconnectedCallback -> ${this.nodeName}`);

    // Don't forget to cleanup :)
  }

  render() {
    super.render();

    console.log(`render -> ${this.nodeName}`);
  }
}

wcdomready(() => {
  window.customElements.define('axa-test', AXATest);
});

export default AXATest;
