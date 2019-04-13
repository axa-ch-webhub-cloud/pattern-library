import { LitElement, html, css, unsafeCSS } from 'lit-element';
import styles from './index.scss';

export default class AXAThead extends LitElement {
  static tagName = 'axa-thead';

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <div class="o-table__thead" role="rowgroup"><slot></slot></div>
    `;
  }
}
