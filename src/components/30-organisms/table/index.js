import defineOnce from '../../../utils/define-once';
import NoShadowDOM from '../../../utils/no-shadow';
import tableCSS from './index.scss';

class AXATable extends NoShadowDOM {
  constructor() {
    super();
    // property defaults
    this.innerscroll = 0;
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
      },
    };
  }

  updated() {
    // whenever 'innerscroll' is updated,
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
  }
}

defineOnce(AXATable.tagName, AXATable);

export default AXATable;
