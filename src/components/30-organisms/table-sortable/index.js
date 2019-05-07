import { LitElement, css, unsafeCSS, html } from 'lit-element';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import '@axa-ch/table';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import defineOnce from '../../../utils/define-once';
import '../../../utils/polyfills';
import tableCss from './index.scss';

const ASC = 'ascending';
const DESC = 'descending';

const mapAsc = {
  [ASC]: 'ASC',
  [DESC]: 'DESC',
};

class AXATableSortable extends LitElement {
  constructor() {
    super();
    this.defaultModel = {
      thead: [],
      tbody: [[]],
      tfoot: [[]],
    };
    this.model = { ...this.defaultModel };
    this.innerscroll = 0;
    this.firstRender = true;
    this.numCollator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: 'base',
    });
    this.strCollator = new Intl.Collator(undefined, {
      sensitivity: 'variant',
    });
    this.lastIndex = -1;
  }

  static get tagName() {
    return 'axa-table-sortable';
  }

  static get styles() {
    return css`
      ${unsafeCSS(tableCss)}
    `;
  }

  static get properties() {
    return {
      model: { type: Object },
      innerscroll: { type: Number },
    };
  }

  validateModel() {
    const {
      thead: { length: theadL },
      tbody: {
        0: { length: tbodyL },
      },
      tfoot: {
        0: { length: tfootL },
      },
    } = this.model;

    return !(theadL !== tbodyL && (!tfootL || tfootL === tbodyL));
  }

  getSortingAria(config) {
    if (!config.sort) {
      return 'none';
    }
    if (config.sort === 'DESC') {
      return DESC;
    }
    return ASC;
  }

  sortByIndex(index, ev) {
    const { target } = ev;
    const sortAs = target.getAttribute('aria-sort') === ASC ? DESC : ASC;
    const tmpModel = { ...this.model };

    const { tbody, tfoot } = this.model;

    tmpModel.tbody = this.sort(tbody, index, sortAs);
    tmpModel.tfoot = this.sort(tfoot, index, sortAs);
    tmpModel.thead[index].sort = mapAsc[sortAs];

    this.lastIndex = index;

    this.model = tmpModel;
  }

  // V8 engine uses QuickSort algorythm for Array.prototype.sort
  // with elements less then 10. for more then 10, it uses the InsertionSort
  // algorythm. As result, for arrays containing 10 or fewer elements,
  // time complexity of .sort is O(n^2), and space complexity is O(1).
  // For longer arrays time complexity is Θ(n log(n)) (average case),
  // and space complexity is O(log(n))
  sort(arr, index, sortAs) {
    return arr.sort((rowLx, rowRx) => {
      const {
        [index]: { html: cellRx },
      } = rowRx;
      const {
        [index]: { html: cellLx },
      } = rowLx;
      const cleanCellRx = cellRx.replace(/<[^>]*>/g, '').trim();
      const cleanCellLx = cellLx.replace(/<[^>]*>/g, '').trim();
      let result;
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(parseInt(cleanCellLx.charAt(0), 10))) {
        result = this.numCollator.compare(cleanCellLx, cleanCellRx);
      } else {
        result = this.strCollator.compare(cleanCellLx, cleanCellRx);
      }
      return sortAs === ASC ? result : ~result + 1;
    });
  }

  shouldUpdate(...args) {
    if (this.firstRender) {
      this.firstRender = false;
      this.model = { ...this.defaultModel, ...this.model };
    }
    if (!this.validateModel()) {
      throw new Error('Invalid model provided');
    }
    return super.shouldUpdate(...args);
  }

  render() {
    const { thead, tbody, tfoot } = this.model;

    return html`
      <axa-table class="o-table-sortable" innerscroll="${this.innerscroll}">
        <table>
          <thead>
            <tr>
              ${thead &&
                thead.map(
                  (config, index) => html`
                    <th
                      class="${this.lastIndex === index
                        ? 'o-table-sortable__th--selected'
                        : ''}"
                      @click="${ev => {
                        if (this.getSortingAria(config) !== 'none') {
                          this.sortByIndex(index, ev);
                        }
                      }}"
                      aria-sort="${this.getSortingAria(config)}"
                    >
                      ${config.html}
                    </th>
                  `
                )}
            </tr>
          </thead>
          <tbody>
            ${tbody &&
              tbody.map(
                cells => html`
                  <tr>
                    ${cells &&
                      cells.map(
                        cell => html`
                          <td>${unsafeHTML(cell.html)}</td>
                        `
                      )}
                  </tr>
                `
              )}
          </tbody>
          ${tfoot
            ? html`
                <tfoot>
                  ${tbody &&
                    tfoot.map(
                      cells => html`
                        <tr>
                          ${cells &&
                            cells.map(
                              cell => html`
                                <td>${unsafeHTML(cell.html)}</td>
                              `
                            )}
                        </tr>
                      `
                    )}
                </tfoot>
              `
            : ''}
        </table>
      </axa-table>
    `;
  }
}

defineOnce(AXATableSortable.tagName, AXATableSortable);

export default AXATableSortable;
