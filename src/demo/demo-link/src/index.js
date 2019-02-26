import { LitElement, html } from 'lit-element';

class AXADemoLink extends LitElement {
  static tagName = 'axa-demo-link';

  render() {
    return html`
      <a href="https://axa-winterthur.ch">AXA Demo Link</a>
    `;
  }
}

customElements.define(AXADemoLink.tagName, AXADemoLink);

export default AXADemoLink;
