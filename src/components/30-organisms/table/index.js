import { LitElement, html, css, unsafeCSS } from 'lit-element';
import defineOnce from '../../../utils/define-once';
import styles from './index.scss';

class AXATable extends LitElement {
  static tagName = 'axa-table';
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`
      <div>Hello</div>
    `;
  }
}

defineOnce(AXATable.tagName, AXATable);
