import { LitElement, html } from 'lit-element';

class AXADemoButton extends LitElement {
  static tagName = 'axa-demo-button';

  render() {
    return html`
      <button>AXA Demo Button</button>
    `;
  }
}

customElements.define(AXADemoButton.tagName, AXADemoButton);

export default AXADemoButton;
