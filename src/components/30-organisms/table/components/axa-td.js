import { LitElement, html } from 'lit-element';

export default class AXATd extends LitElement {
  static tagName = 'axa-td';

  render() {
    return html`
      <span role="cell"><slot></slot></span>
    `;
  }
}
