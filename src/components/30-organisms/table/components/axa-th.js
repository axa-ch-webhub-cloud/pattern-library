import { LitElement, html } from 'lit-element';

export default class AXATh extends LitElement {
  static tagName = 'axa-th';

  render() {
    return html`
      <span role="columnheader"><slot></slot></span>
    `;
  }
}
