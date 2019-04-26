import { LitElement, css, unsafeCSS } from 'lit-element';
import defineOnce from '../../../utils/define-once';
import tableCss from './index.scss';

class AXATable extends LitElement {
  static get tagName() {
    return 'axa-table';
  }

  static get styles() {
    return css`
      ${unsafeCSS(tableCss)}
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    const table = this.querySelector('table');
    if (table) {
      const style = document.createElement('style');
      style.innerText = AXATable.styles;
      this.appendChild(style);
      table.classList.add('o-table');
    }
  }

  createRenderRoot() {
    return this;
  }
}

defineOnce(AXATable.tagName, AXATable);

export default AXATable;
