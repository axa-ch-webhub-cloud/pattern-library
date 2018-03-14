import { BaseComponentGlobal } from '../_abstract/component-types';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXATest extends BaseComponentGlobal {
  // Specify observed attributes so that
  // attributeChangedCallback will work
  static get observedAttributes() { return ['foo']; }

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

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`attributeChangedCallback -> ${this.nodeName} [${name}=${oldValue}] to [${name}=${newValue}]`);
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

  // monkey patching DOM APIs
  set innerText(text) {
    console.log(`set innerText -> ${text}`);

    const textNode = document.createTextNode(text);
  }

  set innerHTML(html) {
    console.log(`set innerHTML -> ${html}`);

    const div = document.createElement('div');

    div.innerHTML = html;
  }

  appendChild(node) {
    console.log(`set appendChild -> ${node}`);
  }

  insertBefore(node) {
    console.log(`set insertBefore -> ${node}`);
  }
}

wcdomready(() => {
  window.customElements.define('axa-test', AXATest);
});

export default AXATest;
