import { LitElement, html } from 'lit-element';

export default class AXATr extends LitElement {
  static tagName = 'axa-tr';

  render() {
    return html`
      <div role="row"><slot></slot></div>
    `;
  }
}
