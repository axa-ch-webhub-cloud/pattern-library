import { LitElement, css, unsafeCSS, html } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import defineOnce from '../../../utils/define-once';
import tableCss from './index.scss';

// TODO use THE NPM package one axa-table is released
import '../table';

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
      model: { type: Object, reflect: true },
      innerscroll: { type: Number },
    };
  }

  validateModel() {
    const {
      thead : { length: theadL },
      tbody : { 0: { length: tbodyL } },
      tfoot : { 0: { length: tfootL } },
    } = this.model;

    if (theadL !== tbodyL && (!tfootL || tfootL === tbodyL)) {
      return false;
    }

    return true;
  }

  render() {

    this.model = { ...this.defaultModel, ...this.model };

    if (!this.validateModel()) {
      throw new Error('Invalid model provided');
    }

    const { thead, tbody, tfoot } = this.model;

    return html`
      <axa-table innerscroll="${this.innerscroll}">
          <table>
            <thead>
              <tr>
                ${thead &&
                thead.map(
                  config => html`<th>${config.html}</th>`
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
            ${tfoot ? html`
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
            ` : ''}
          </table>
      </axa-table>
    `;
  }
}

defineOnce(AXATableSortable.tagName, AXATableSortable);

export default AXATableSortable;
