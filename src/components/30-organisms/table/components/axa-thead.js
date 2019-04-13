import { LitElement, html } from 'lit-element';

export default class AXAThead extends LitElement {
  static tagName = 'axa-thead';

  render() {
    return html`
      <div role="rowgroup"><slot></slot></div>
    `;
  }
}
