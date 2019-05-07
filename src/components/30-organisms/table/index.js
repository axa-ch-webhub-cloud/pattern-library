import { LitElement } from 'lit-element';
import defineOnce from '../../../utils/define-once';
import '../../../utils/polyfills';
import tableCss from './index.scss';

class AXATable extends LitElement {
  constructor() {
    super();
    this.innerscroll = 0;
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

  firstUpdated(...args) {
    super.firstUpdated(...args);
    const table = this.querySelector('table');
    if (table) {
      const { documentElement } = this;
      const doc = documentElement || document;

      // If we are not in ShadowDom context, reuse styles from a previous defined
      // table if there are 2 on the page.
      if (!doc.querySelector('#axa-table-global-styles-id')) {
        const style = doc.createElement('style');
        style.setAttribute('id', 'axa-table-global-styles-id');
        style.textContent = AXATable.styles;
        this.appendChild(style);
      }

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
