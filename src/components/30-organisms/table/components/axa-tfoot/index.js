import { LitElement, html, css, unsafeCSS } from 'lit-element';
import styles from './index.scss';

export default class AXATfoot extends LitElement {
  static tagName = 'axa-tfoot';

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <div class="o-table__tfoot" role="rowgroup"><slot></slot></div>
    `;
  }
}
