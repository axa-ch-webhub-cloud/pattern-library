import { LitElement, css, unsafeCSS } from 'lit-element';
import defineOnce from '../../../utils/define-once';
import tableCss from './index.scss';

// subcomponents that can only be used with axa-table:

// semantics are done with aria: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Table_Role
class AXATable extends LitElement {
  static tagName = 'axa-table';

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
