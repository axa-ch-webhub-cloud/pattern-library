import { LitElement, html, unsafeCSS, css } from 'lit-element';
import styles from './index.scss';

export default class AXATr extends LitElement {
  static tagName = 'axa-tr';

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <div class="o-table__row" role="row"><slot></slot></div>
    `;
  }
}
