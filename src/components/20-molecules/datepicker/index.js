import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import datepickerCSS from './index.scss';
import { getWeekdays, getAllLocaleMonthsArray } from './utils/date';
import Store from './utils/Store';

const iconDatepicker = svg`<svg class="m-datepicker__input-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
<path fill="none" d="M0 0h24v24H0z"/>
<path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
</svg>
`;

export class Datepicker extends LitElement {
  static tagName = 'axa-datepicker';
  static styles = css`
    ${unsafeCSS(datepickerCSS)}
  `;

  static get properties() {
    return {
      open: { type: Boolean, reflect: true },
      locale: { type: String, reflect: true },
      date: { type: Object, reflect: true },
      outputDate: { type: String, reflect: true },
      year: { type: Number, reflect: true },
      month: { type: Number, reflect: true },
      day: { type: Number, reflect: true },
      inputField: { type: Boolean },
      monthItems: { type: Array },
      yearItems: { type: Array },
      cells: { type: Array },
      allowedYears: { type: Array },
      labelButtonCancel: { type: String },
      labelButtonOk: { type: String },
    };
  }

  // TODO: set the selectd item of the year and month array from startdate
  constructor() {
    super();
    this.className = 'm-datepicker';
    this.locale = 'de-CH'; // TODO get from attributes
    this.labelButtonCancel = 'Cancel'; // TODO get from attributes
    this.labelButtonOk = 'OK'; // TODO get from attributes
    this.startDate = new Date(); // TODO get from attributes
    this.date = this.startDate;
    this.outputDate = '';
    this.year = this.date.getFullYear();
    this.month = this.date.getMonth();
    this.allowedYears = [2019, 2020]; // TODO get from attributes

    this.monthItems = getAllLocaleMonthsArray(this.locale).map((item, index) => ({
      isSelected: index === this.month,
      name: item.toString(),
      value: index.toString(),
    }));

    this.yearItems = this.allowedYears.map(item => ({
      isSelected: item === this.year,
      name: item.toString(),
      value: item.toString(),
    }));

    this.store = new Store(this.locale, this.startDate, this.allowedYears);
    this.cells = this.store.getCells();
    this.weekdays = getWeekdays(this.startDate, this.locale);
  }

  firstUpdated() {
    this.dropdownMonth = this.shadowRoot.querySelector('.js-datepicker__dropdown-month');
    this.dropdownYear = this.shadowRoot.querySelector('.js-datepicker__dropdown-year');
    this.inputField = this.shadowRoot.querySelector('.js-datepicker__input');
    this.dropdownMonth.addEventListener('AXA_CHANGE', e => this.handleChangeDropdownMonth(e));
    this.dropdownYear.addEventListener('AXA_CHANGE', e => this.handleChangeDropdownYear(e));
  }

  connectedCallback() {
    super.connectedCallback();
    window.axaComponents = window.axaComponents || {};
  }

  disconnectedCallback() {
    this.dropdownMonth.removeEventListener('AXA_CHANGE', e => this.handleChangeDropdownMonth(e));
    this.dropdownYear.removeEventListener('AXA_CHANGE', e => this.handleChangeDropdownYear(e));
  }

  toggleDatepicker() {
    if (!this.open) {
      this.open = true;
      if (window.axaComponents.openDropdownInstance) {
        window.axaComponents.openDropdownInstance.open = false;
      }
      window.axaComponents.openDropdownInstance = this;
    } else {
      this.open = false;
      window.axaComponents.openDropdownInstance = null;
    }
  }

  handleChangeDropdownMonth(e) {
    e.preventDefault();
    const month = e.detail;
    if (month) {
      const parsedDate = new Date(this.date);
      parsedDate.setMonth(month);
      this.date = parsedDate;
    }
  }

  handleChangeDropdownYear(e) {
    e.preventDefault();
    const year = e.detail;
    if (year) {
      const parsedDate = new Date(this.date);
      parsedDate.setFullYear(year);
      this.date = parsedDate;
    }
  }

  handleInputButtonClick(e) {
    e.preventDefault();
    this.toggleDatepicker();
  }

  render() {
    return html`
      <article class="m-datepicker">
        ${this.inputField
          ? html`
              <div class="m-datepicker__input-wrap">
                <input
                  class="m-datepicker__input js-datepicker__input"
                  type="text"
                  placeholder="Please select a date"
                  value="${this.outputDate}"
                />
                <button class="m-datepicker__input-button" @click="${this.handleInputButtonClick}">
                  <span class="m-datepicker__input-icon">${iconDatepicker}</span>
                </button>
              </div>
            `
          : ''}
        <div class="m-datepicker__wrap">
          <div className="m-datepicker__article">
            <div class="m-datepicker__dropdown-wrap">
              <axa-dropdown
                class="m-datepicker__dropdown m-datepicker__dropdown-month js-datepicker__dropdown-month"
                max-height
                items="${JSON.stringify(this.monthItems)}"
                title="Month"
              >
              </axa-dropdown>

              <axa-dropdown
                class="m-datepicker__dropdown m-datepicker__dropdown-year js-datepicker__dropdown-year"
                max-height
                items="${JSON.stringify(this.yearItems)}"
                title="Year"
              >
              </axa-dropdown>
            </div>

            <div class="m-datepicker__weekdays">
              ${this.weekdays
                ? this.weekdays.map(
                    day =>
                      html`
                        <div class="m-datepicker__weekdays-day">${day}</div>
                      `
                  )
                : ''}
            </div>

            <div class="m-datepicker__calendar js-datepicker__calendar">
              ${this.cells
                ? this.cells.map(
                    (cell, index) =>
                      html`
                        <button
                          @click="${this.handleDatepickerCalendarCellClick}"
                          tabindex="0"
                          data-index="${index}"
                          data-value="${cell.value}"
                          class="m-datepicker__calendar-cell ${cell.className}"
                        >
                          ${cell.text}
                        </button>
                      `
                  )
                : ''}
            </div>
            <div class="m-datepicker__buttons">
              <axa-button
                ghost
                class="m-datepicker__button m-datepicker__button-cancel js-datepicker__button-cancel"
                @click="${this.handleButtonCancelClick}"
                >${this.labelButtonCancel}</axa-button
              >
              <axa-button class="m-datepicker__button m-datepicker__button-ok js-datepicker__button-ok" @click="${this.handleButtonOkClick}"
                >${this.labelButtonOk}</axa-button
              >
            </div>
          </div>
        </div>
      </article>
    `;
  }

  handleButtonOkClick() {
    this.toggleDatepicker();
    this.inputField.focus();
  }

  handleButtonCancelClick() {
    this.toggleDatepicker();
  }

  handleDatepickerCalendarCellClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.blur(); // Prevent the ugly focus ring after the click
    const index = parseInt(e.target.dataset.index, 10);
    const date = new Date(Date.parse(e.target.dataset.value));
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.day = date.getDate();
    this.index = index;
    this.date = date;
    this.outputDate = date.toLocaleString(this.locale, { day: 'numeric', month: 'numeric', year: 'numeric' });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === 'date' && this.store && this.date) {
      // Validation
      if (this.date.getFullYear() < this.allowedYears[0] || this.date.getFullYear() > this.allowedYears[this.allowedYears.length - 1]) {
        const event = new CustomEvent('AXA_VALIDATION', {
          detail: {
            type: 'error',
            message: 'not in range',
          },
          bubbles: true,
          cancelable: true,
        });
        this.dispatchEvent(event);
        return;
      }

      // Update props which are dom reflected
      this.month = this.date.getMonth();
      this.year = this.date.getFullYear();
      this.day = this.date.getDate();

      this.store.update(this.date);
      this.cells = this.store.getCells();

      // Fire custom success events
      const eventChange = new CustomEvent('AXA_CHANGE', {
        detail: newValue,
        bubbles: true,
        cancelable: true,
      });

      this.dispatchEvent(eventChange);
      const eventValidation = new CustomEvent('AXA_VALIDATION', {
        detail: { type: 'success', message: 'valid' },
        bubbles: true,
        cancelable: true,
      });
      this.dispatchEvent(eventValidation);
    }
  }
}

customElements.define(Datepicker.tagName, Datepicker);
