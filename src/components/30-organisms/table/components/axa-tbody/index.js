import { LitElement, html, css, unsafeCSS } from 'lit-element';
import styles from './index.scss';

export default class AXATbody extends LitElement {
  static tagName = 'axa-tbody';

  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <div class="o-table__tbody" role="rowgroup"><slot></slot></div>
    `;
  }
}
