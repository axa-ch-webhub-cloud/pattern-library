// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import { DateInputSvg } from '@axa-ch/materials';
import { LitElement, html, css, unsafeCSS, svg } from 'lit-element';
import '@axa-ch/dropdown';
import '@axa-ch/button';
import datepickerCSS from './index.scss';
import {
  getWeekdays,
  getAllLocaleMonthsArray,
  parseLocalisedDateIfValid,
} from './utils/date';
import Store from './utils/Store';

const dateInputIcon = svg([DateInputSvg]);
export class Datepicker extends LitElement {
  static tagName = 'axa-datepicker';
  static styles = css`
    ${unsafeCSS(datepickerCSS)}
  `;

  static get properties() {
    return {
      'data-test-id': { type: String, reflect: true },
      open: { type: Boolean, reflect: true },
      locale: { type: String, reflect: true },
      date: { type: Object, reflect: true },
      outputdate: { type: String, reflect: true },
      year: { type: Number, reflect: true },
      month: { type: Number, reflect: true },
      day: { type: Number, reflect: true },
      inverted: { type: Boolean, reflect: true },
      inputfield: { type: Boolean, reflect: true },
      allowedyears: { type: Array, reflect: true },
      monthitems: { type: Array },
      yearitems: { type: Array },
      cells: { type: Array },
      labelbuttoncancel: { type: String },
      labelbuttonok: { type: String },
    };
  }

  constructor() {
    super();
    this.locale = 'de-CH';
    this.open = false;
    this.labelbuttoncancel = 'Schliessen';
    this.labelbuttonok = 'OK';
    this.startDate = new Date();
    this.year = this.startDate.getFullYear();
    this.month = this.startDate.getMonth();
    this.day = this.startDate.getDate();
    this.allowedyears = [this.year];
    this.outputdate = '';
  }

  firstUpdated() {
    this.inputfield = this.shadowRoot.querySelector('.js-datepicker__input');
    window.addEventListener('keydown', e => this.handleWindowKeyDown(e));
    window.addEventListener('click', e => this.handleBodyClick(e));

    if (this.inputfield) {
      window.setTimeout(() => {
        window.addEventListener(
          'resize',
          this.debounce(() => this.handleViewportCheck(this.inputfield), 250)
        );
        window.addEventListener(
          'scroll',
          this.debounce(() => this.handleViewportCheck(this.inputfield), 250)
        );
        this.handleViewportCheck(this.inputfield);
      }, 100);
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.axaComponents = window.axaComponents || {};
    this.addEventListener('click', e => this.handleDatepickerClick(e));

    if (this.year >= 0) {
      this.startDate.setFullYear(this.year);
    }

    if (this.month >= 0 && typeof this.month === 'number') {
      this.startDate.setMonth(this.month);
    }

    if (this.day >= 0) {
      this.startDate.setDate(this.day);
    }

    if (this.allowedyears.length < 2) {
      this.allowedyears = [this.year];
    }

    this.date = this.startDate;
    this.store = new Store(this.locale, this.date, this.allowedyears);
    this.cells = this.store.getCells();
    this.weekdays = getWeekdays(this.date, this.locale);
  }

  disconnectedCallback() {
    this.removeEventListener('click', e => this.handleDatepickerClick(e));
    window.removeEventListener('click', e => this.handleBodyClick(e));
  }

  render() {
    this.monthitems = getAllLocaleMonthsArray(this.locale).map(
      (item, index) => ({
        isSelected: index === this.month,
        name: item.toString(),
        value: index.toString(),
      })
    );

    this.yearitems = this.allowedyears.map(item => ({
      isSelected: item === this.year,
      name: item.toString(),
      value: item.toString(),
    }));

    return html`
      <article class="m-datepicker">
        ${this.inputfield &&
          html`
            <div class="m-datepicker__input-wrap">
              <input
                @keyup="${this.handleInputChange}"
                class="m-datepicker__input js-datepicker__input"
                type="text"
                placeholder="Please select a date"
                value="${this.outputdate}"
              />
              <button
                type="button"
                class="m-datepicker__input-button"
                @click="${this.handleInputButtonClick}"
              >
                <span>${dateInputIcon}</span>
              </button>
            </div>
          `}
        <div class="m-datepicker__wrap">
          <div class="m-datepicker__article">
            <div class="m-datepicker__dropdown-wrap">
              <axa-dropdown
                @axa-change="${this.handleChangeDropdownMonth}"
                class="m-datepicker__dropdown m-datepicker__dropdown-month js-datepicker__dropdown-month"
                max-height
                items="${JSON.stringify(this.monthitems)}"
                title="Choose Month"
              >
              </axa-dropdown>

              <axa-dropdown
                @axa-change="${this.handleChangeDropdownYear}"
                class="m-datepicker__dropdown m-datepicker__dropdown-year js-datepicker__dropdown-year"
                max-height
                items="${JSON.stringify(this.yearitems)}"
                title="Choose Year"
              >
              </axa-dropdown>
            </div>

            <div class="m-datepicker__weekdays">
              ${this.weekdays &&
                this.weekdays.map(
                  day =>
                    html`
                      <span class="m-datepicker__weekdays-day">${day}</span>
                    `
                )}
            </div>

            <div class="m-datepicker__calendar js-datepicker__calendar">
              ${this.cells &&
                this.cells.map(
                  (cell, index) =>
                    html`
                      <button
                        @click="${this.handleDatepickerCalendarCellClick}"
                        type="button"
                        tabindex="0"
                        data-index="${index}"
                        data-value="${cell.value}"
                        data-day="${cell.text}"
                        class="m-datepicker__calendar-cell ${cell.className}"
                      >
                        ${cell.text}
                      </button>
                    `
                )}
            </div>
            <div class="m-datepicker__buttons">
              <axa-button
                secondary
                class="m-datepicker__button m-datepicker__button-cancel js-datepicker__button-cancel"
                @click="${this.handleButtonCancelClick}"
                >${this.labelbuttoncancel}</axa-button
              >
              <axa-button
                class="m-datepicker__button m-datepicker__button-ok js-datepicker__button-ok"
                @click="${this.handleButtonOkClick}"
                >${this.labelbuttonok}</axa-button
              >
            </div>
          </div>
        </div>
      </article>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    const hasValue = newValue !== null;
    if (hasValue && name === 'date' && this.store && this.date) {
      const newDate = this.date;

      // Validation
      if (!this.isYearInValidDateRange(newDate.getFullYear())) {
        return;
      }

      // Fire custom success events
      const eventChange = new CustomEvent('axa-change', {
        detail: newDate,
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

  // Methods
  handleViewportCheck(baseElem, elem) {
    if (this.shouldMove(baseElem, elem)) {
      if (!this.inverted) {
        this.inverted = true;
      }
    } else {
      this.inverted = false;
    }
  }

  shouldMove(elem) {
    const element = elem.getBoundingClientRect();
    const moreSpaceOnTopThanBottom =
      element.top > window.innerHeight - element.bottom;
    return moreSpaceOnTopThanBottom;
  }

  toggleDatepicker() {
    if (!this.open) {
      if (
        window.axaComponents.openDatepickerInstance &&
        window.axaComponents.openDatepickerInstance !== this
      ) {
        window.axaComponents.openDatepickerInstance.open = false;
      }
      this.open = true;
      window.axaComponents.openDatepickerInstance = this;
    } else {
      this.open = false;
      window.axaComponents.openDatepickerInstance = null;
    }
  }

  isValidDate(date) {
    let out = false;
    try {
      const parsedDate = new Date(Date.parse(date));
      // eslint-disable-next-line no-restricted-properties
      const isValid = parsedDate instanceof Date && !window.isNaN(parsedDate);
      const isValidDateLocalized = parseLocalisedDateIfValid(this.locale, date);
      if (
        (isValid && isValidDateLocalized) ||
        (!isValid && isValidDateLocalized)
      ) {
        out = isValidDateLocalized;
      }
    } catch (e) {
      out = false;
    }
    return out;
  }

  isYearInValidDateRange(year) {
    return this.allowedyears.indexOf(year) > -1;
  }

  debounce(func, wait, immediate) {
    let timeout;
    return (...args) => {
      const context = this;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  updateDatepickerProps(date) {
    this.month = date.getMonth();
    this.day = date.getDate();
    this.year = date.getFullYear();
    this.store.update(date);
    this.cells = this.store.getCells();
  }

  // Events
  handleWindowKeyDown(e) {
    if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
      e.preventDefault();
      if (this.open) {
        this.toggleDatepicker();
      }
    }
  }

  handleDatepickerClick(e) {
    e.stopPropagation();
  }

  handleBodyClick(e) {
    e.stopPropagation();
    if (this.open) {
      this.open = false;
    }
  }

  handleChangeDropdownMonth(e) {
    e.preventDefault();
    const month = e.detail;
    if (month) {
      const newDate = new Date(this.year, month, this.day);
      this.date = newDate;
      this.updateDatepickerProps(this.date);
    }
  }

  handleChangeDropdownYear(e) {
    e.preventDefault();
    const year = e.detail;
    if (year) {
      const parsedDate = new Date(this.date);
      parsedDate.setFullYear(year);
      this.date = parsedDate;
      this.updateDatepickerProps(this.date);
    }
  }

  handleInputButtonClick(e) {
    e.stopPropagation();
    if (this.inputfield) {
      this.toggleDatepicker();
    }
  }

  handleInputChange(e) {
    e.preventDefault();
    const validDate = this.isValidDate(e.target.value);
    if (validDate) {
      this.date = validDate;
      this.updateDatepickerProps(this.date);
      this.outputdate = validDate.toLocaleString(this.locale, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      });
    }
  }

  handleButtonOkClick() {
    if (this.inputfield) {
      this.toggleDatepicker();
    }

    this.outputdate = this.date.toLocaleString(this.locale, {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
  }

  handleButtonCancelClick() {
    this.toggleDatepicker();
  }

  handleDatepickerCalendarCellClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.blur(); // Prevent the ugly focus ring after the click
    const cellIndex = parseInt(e.target.dataset.index, 10);
    const date = e.target.dataset.value;
    this.index = cellIndex;
    this.date = new Date(date);
    this.updateDatepickerProps(this.date);

    this.monthitems = getAllLocaleMonthsArray(this.locale).map(
      (item, index) => ({
        isSelected: index === this.month,
        name: item.toString(),
        value: index.toString(),
      })
    );

    this.yearitems = this.allowedyears.map(item => ({
      isSelected: item === this.year,
      name: item.toString(),
      value: item.toString(),
    }));
  }
}

customElements.define(Datepicker.tagName, Datepicker);
export default Datepicker;
