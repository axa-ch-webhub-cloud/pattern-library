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

  firstUpdated() {
    // do we have minimal correct children content?
    const table = this.querySelector('table');
    if (!table) {
      // no, early exit
      return;
    }
    // inject deduplicated inline <style>tableCSS</style>
    this.inlineStyles();
    // annotate top-level <table> for styling purposes
    table.classList.add('o-table');
    table.style.minWidth = `${this.innerscroll}px`;
  }
}

defineOnce(AXATable.tagName, AXATable);

export default AXATable;
