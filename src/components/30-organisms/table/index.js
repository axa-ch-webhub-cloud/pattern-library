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
    // update our own inline style accordingly.
    // The <table> child's CSS *inherits* this min-width!
    // This indirect way of styling avoids having to track dynamic
    // changes to the children of our <axa-table> via MutationObserver!
    this.style.minWidth = `${this.innerscroll}px`;
  }
}

defineOnce(AXATable.tagName, AXATable);

export default AXATable;
