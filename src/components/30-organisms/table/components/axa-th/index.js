import { LitElement, html, css, unsafeCSS } from 'lit-element';
import styles from './index.scss';

export default class AXATh extends LitElement {
  static tagName = 'axa-th';

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <span class="o-table__cell o-table__cell--th" role="columnheader" aria-sort="none"><slot></slot></span>
    `;
  }
}
