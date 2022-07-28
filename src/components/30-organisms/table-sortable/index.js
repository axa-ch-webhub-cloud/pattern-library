/* eslint-disable no-restricted-globals */
import AXATable from '@axa-ch/table';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import fireCustomEvent from '../../../utils/custom-event';
import applyDefaults from '../../../utils/apply-defaults';
import tableCss from './index.scss';

const ASC = 'ascending';
const DESC = 'descending';
const TABLE_BODY = 'tbody';
const TABLE_FOOT = 'tfoot';
// codes that are used to simulate click on row via keyboard
const KEY_CODES = [13, 32];
// key names that are used to simulate click on row via keyboard
const KEY_NAMES = ['Space', 'Enter'];

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
    applyDefaults(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.sortByIndex = this.sortByIndex.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

    this.firstRender = true;
    this.numCollator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: 'base',
    });
    this.strCollator = new Intl.Collator(undefined, {
      sensitivity: 'variant',
    });
    this.lastIndex = -1;

    defineVersioned([AXATable], __VERSION_INFO__, this);
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
      model: { type: Object, defaultValue: { ...this.defaultModel } },
      innerscroll: { type: Number },
      maxheight: { type: Number },
      dateSortColumnIndex: { type: String },
      onClick: { type: Function, attribute: false },
    };
  }

  areValuesEqualOrZero(a, b) {
    if (a === b) {
      return true;
    }

    return a === 0 || b === 0;
  }

  areLengthValuesConsistent(bodyLength = 0, headLength = 0, footLength = 0) {
    // all levels equal
    if (headLength === bodyLength && bodyLength === footLength) {
      return true;
    }

    // special behaviour
    // body is mandatory if another level has elements
    if (bodyLength === 0 && (headLength > 0 || footLength > 0)) {
      return false;
    }

    // all levels are valid html
    if (headLength === 0) {
      return this.areValuesEqualOrZero(bodyLength, footLength);
    }

    if (bodyLength === 0) {
      return this.areValuesEqualOrZero(headLength, footLength);
    }

    if (footLength === 0) {
      return this.areValuesEqualOrZero(headLength, bodyLength);
    }

    return false;
  }

  validateModel() {
    const {
      thead: { length: theadL },
      tbody: {
        0: { length: tbodyL },
      },
      tfoot,
    } = this.model;
    let tfootL = 0;
    if (tfoot && tfoot[0]) {
      tfootL = tfoot[0].length;
    }
    return this.areLengthValuesConsistent(tbodyL, theadL, tfootL);
  }

  sortByIndex(index, config) {
    const sortingAria = this.getSortingAria(config);

    if (sortingAria !== 'none') {
      const sortAs = sortingAria === ASC ? DESC : ASC;
      const tmpModel = { ...this.model };
      const { tbody, tfoot } = this.model;

      tmpModel.tbody = this.sort(tbody, index, sortAs, config.key);

      if (tfoot && tfoot[0]) {
        tmpModel.tfoot = this.sort(tfoot, index, sortAs, config.key);
      } else {
        tmpModel.tfoot = [[]];
      }

      tmpModel.thead[index].sort = mapAsc[sortAs];

      this.lastIndex = index;
      this.model = tmpModel;
    }
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

  sort(arr, index, sortAs, key) {
    // Declaration of dateColumnsCustomSort had to be moved from the constructor, because
    // the value of this.dateSortColumnIndex wasn't available
    const dateColumnsCustomSort = this.dateSortColumnIndex
      .split(',')
      .map(cellIndex => {
        const parsed = parseInt(cellIndex, 10);
        return isNaN(parsed) ? undefined : parsed;
      });

    return arr.sort((rowLx, rowRx) => {
      const cleanCell = (cell = '') => cell.replace(/<[^>]*>/g, '').trim();

      const cellRx = key
        ? rowRx[index][key]
        : cleanCell(rowRx[index].html) || rowRx[index].text;
      const cellLx = key
        ? rowLx[index][key]
        : cleanCell(rowLx[index].html) || rowLx[index].text;

      const convertComparatorToSortingType = compNumber => {
        return sortAs === ASC ? compNumber : -compNumber;
      };
      let result;
      if (this.dateSortColumnIndex && dateColumnsCustomSort.includes(index)) {
        const cleanDateLx = this.convertDateToUnixEpochInteger(cellLx);
        const cleanDateRx = this.convertDateToUnixEpochInteger(cellRx);

        result = this.numCollator.compare(cleanDateLx, cleanDateRx);
        return convertComparatorToSortingType(result);
      }

      if (!isNaN(parseInt(cellLx.charAt(0), 10))) {
        result = this.numCollator.compare(cellLx, cellRx);
      } else {
        result = this.strCollator.compare(cellLx, cellRx);
      }

      return convertComparatorToSortingType(result);
    });
  }

  convertDateToUnixEpochInteger(d) {
    const parts = d.split(/[./-]/);

    const addLeadingZeroes = (rawNumber, numDigits) => {
      const number = Math.abs(parseInt(rawNumber, 10)); // coerce number to integer >= 0
      const rawNumDigits = number.toString().length;
      const numMissingZeroes = Math.max(0, numDigits - rawNumDigits);
      const leadingZeroesString = (10 ** numMissingZeroes).toString().slice(1); // slice(1): cut off leading '1'
      return `${leadingZeroesString}${number}`;
    };

    return Date.parse(
      `${addLeadingZeroes(parts[2], 4)}-${addLeadingZeroes(
        parts[1],
        2
      )}-${addLeadingZeroes(parts[0], 2)}T00:00:00`
    );
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

  handleOnClick(ev, index, type) {
    ev.preventDefault();
    ev.stopPropagation();
    const { currentTarget } = ev;
    const trimmedRow = currentTarget.textContent.replace(/\s+/g, ' ').trim();
    const details = {
      type,
      index,
      domElement: currentTarget,
      textArray: trimmedRow.split(' '),
    };
    this.onClick(details);
    fireCustomEvent('click', details, this, { bubbles: false });
  }

  // if is focused, let the row be pressed via keyboard
  onKeyPress(...args) {
    const {
      0: { charCode, code },
    } = args;
    if (KEY_CODES.indexOf(charCode) > -1 || KEY_NAMES.indexOf(code) > -1) {
      this.handleOnClick(...args);
    }
  }

  /* eslint-disable indent */
  render() {
    const { thead, tbody, tfoot } = this.model;

    return versionedHtml(this)`
      <axa-table
        class="o-table-sortable js-table"
        maxheight="${this.maxheight}"
        innerscroll="${this.innerscroll}"
      >
        <table>
          <thead>
            <tr>
              ${
                thead &&
                thead.map(
                  (config, index) => html`
                    <th
                      class="${this.lastIndex === index
                        ? 'o-table-sortable__th--selected'
                        : ''}"
                      @click="${() => this.sortByIndex(index, config)}"
                      aria-sort="${this.getSortingAria(config)}"
                    >
                      <div class="o-table-sortable__th__flexcontainer">
                        <span>${config.html}</span>
                        <div class="o-table-sortable__th__arrow-wrapper">
                          <div
                            class="o-table-sortable__th__arrow o-table-sortable__th__arrowup"
                          ></div>
                          <div
                            class="o-table-sortable__th__arrow o-table-sortable__th__arrowdown"
                          ></div>
                        </div>
                      </div>
                    </th>
                  `
                )
              }
            </tr>
          </thead>
          <tbody>
            ${
              tbody &&
              tbody.map(
                (cells, index) => html`
                  <tr
                    tabindex="0"
                    @click=${ev => {
                      this.handleOnClick(ev, index, TABLE_BODY);
                    }}
                    @keypress=${ev => {
                      this.onKeyPress(ev, index, TABLE_BODY);
                    }}
                  >
                    ${cells &&
                    cells.map(
                      cell => html`
                        <td>
                          ${cell.html ? unsafeHTML(cell.html) : cell.text}
                        </td>
                      `
                    )}
                  </tr>
                `
              )
            }
          </tbody>
          ${
            tfoot
              ? html`
                  <tfoot>
                    ${tbody &&
                    tfoot.map(
                      (cells, index) => html`
                        <tr
                          tabindex="0"
                          @click=${ev => {
                            this.handleOnClick(ev, index, TABLE_FOOT);
                          }}
                          @keypress=${ev => {
                            this.onKeyPress(ev, index, TABLE_FOOT);
                          }}
                        >
                          ${cells &&
                          cells.map(
                            cell => html` <td>${unsafeHTML(cell.html)}</td> `
                          )}
                        </tr>
                      `
                    )}
                  </tfoot>
                `
              : ''
          }
        </table>
      </axa-table>
    `;
  }
}

defineVersioned([AXATableSortable], __VERSION_INFO__);

export default AXATableSortable;
