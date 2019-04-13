import { LitElement, html, css, unsafeCSS } from 'lit-element';
import styles from './index.scss';

export default class AXATd extends LitElement {
  static tagName = 'axa-td';

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <span class="o-table__cell" role="cell"><slot></slot></span>
    `;
  }
}
