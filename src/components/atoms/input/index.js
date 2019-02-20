import { LitElement, html } from 'lit-element';

class AXAInput extends LitElement {
  render() {
    return html`
      <input type="text" placeholder="type some text" /> 
    `;
  }
}

customElements.define('axa-input', AXAInput);
