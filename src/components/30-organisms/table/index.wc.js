import { defineVersioned } from '../../../utils/component-versioning.js';
import NoShadowDOM from '../../../utils/no-shadow.js';
import applyDefaults from '../../../utils/apply-defaults.js';
import tableCSS from './index.scss';

class AXATable extends NoShadowDOM {
  constructor() {
    super();
    // property defaults
    applyDefaults(this);
  }

  static get tagName() {
    return 'axa-table';
  }

  static get styles() {
    return tableCSS;
  }

  static get properties() {
    return {
      innerscroll: {
        type: Number,
        reflect: true /* for attribute-selector styling */,
        defaultValue: 0,
      },
      maxheight: {
        type: Number,
        reflect: true /* for attribute-selector styling */,
        defaultValue: -1,
      },
    };
  }

  updated() {
    // whenever 'innerscroll' or maxheight is updated,
    // update the topmost <table's> own inline style accordingly.
    // CAVEATS: this messes with the children, but is unavoidable here
    // to insure correct only-table-scrolls-horizontally behaviour!
    // A fully general solution would monitor dynamic changes in the
    // children via MutationObserver.
    const topMostTable = this.firstElementChild;
    if (!topMostTable || topMostTable.tagName !== 'TABLE') {
      // eslint-disable-next-line no-console
      console.info(`<${AXATable.tagName}>: expected <table> as first child!`);
      return;
    }
    topMostTable.style.minWidth = `${this.innerscroll}px`;

    if (this.maxheight > 0) {
      const tableBody = topMostTable.querySelector('tbody');
      if (tableBody) {
        tableBody.style.maxHeight = `${this.maxheight}px`;
      }
    }
  }
}

defineVersioned([AXATable], __VERSION_INFO__);

export default AXATable;
