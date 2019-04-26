import { LitElement } from 'lit-element';
import defineOnce from '../../../utils/define-once';
import tableCss from './index.scss';

class AXATable extends LitElement {
  constructor() {
    super();
    this.innerscroll= 0;
  }

  static get tagName() {
    return 'axa-table';
  }

  static get styles() {
    return tableCss;
  }

  static get properties() {
    return {
      innerscroll: { type: Number },
    };
  }


  connectedCallback() {
    super.connectedCallback();
    const table = this.querySelector('table');
    if (table) {
      const style = document.createElement('style');
      style.textContent = AXATable.styles;
      this.appendChild(style);
      table.classList.add('o-table');
      table.style.minWidth = `${this.innerscroll}px`;
      if (this.innerscroll) {
        this.classList.add('o-table--innerscroll');
      }
    }
  }

  createRenderRoot() {
    return this;
  }
}

defineOnce(AXATable.tagName, AXATable);

export default AXATable;
