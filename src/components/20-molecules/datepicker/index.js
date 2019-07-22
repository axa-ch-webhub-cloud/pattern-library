/* eslint-disable import/no-extraneous-dependencies */
import { DateInputSvg } from '@axa-ch/materials/icons';
import { html, svg } from 'lit-element';
import '@axa-ch/dropdown';
import '@axa-ch/button';
import styles from './index.scss';
import {
  getWeekdays,
  getAllLocaleMonthsArray,
  parseLocalisedDateIfValid,
} from './utils/date';

import NoShadowDOM from '../../../utils/no-shadow';
import defineOnce from '../../../utils/define-once';
import debounce from '../../../utils/debounce';

import Store from './utils/Store';

// module constants
const dateInputIcon = svg([DateInputSvg]);
const EMPTY_FUNCTION = () => {};

// module globals
let openDatepickerInstance;

// helper functions
const range = (start, end) =>
  new Array(end - start + 1).fill(undefined).map((_, i) => i + start);

const shouldMove = elem => {
  const element = elem.getBoundingClientRect();
  const moreSpaceOnTopThanBottom =
    element.top > window.innerHeight - element.bottom;
  return moreSpaceOnTopThanBottom;
};

const applyEffect = self =>
  new Promise(resolve => {
    setTimeout(() => {
      const datepickerWrapper = self.querySelector('.js-datepicker__wrap');
      if (!datepickerWrapper) {
        return;
      }
      const effect = 'm-datepicker__wrap-effect';
      const hasEffect = datepickerWrapper.classList.contains(effect);
      datepickerWrapper.classList[hasEffect ? 'remove' : 'add'](effect);
      setTimeout(
        () => resolve(),
        250 /* effect duration - keep in sync with CSS */
      );
    }, 0 /* execute after render() */);
  });

const parseAndFormatAllowedYears = (allowedyears, setYear) => {
  const yearSet = new Set();
  const inputYears = [...allowedyears, setYear];
  for (let i = 0, n = inputYears.length, years, flattenedYears; i < n; i++) {
    years = inputYears[i];
    // skip over non-year-like entities
    if (!/^[\d-]+$/.test(`${years}`)) {
      // eslint-disable-next-line no-continue
      continue;
    }
    // a year range like '2019-2024'?
    if (typeof years === 'string') {
      const [fromYear, toYear] = years.split('-');
      flattenedYears = range(fromYear | 0, toYear | 0); // | 0: convert to 32-bit integer
    } else {
      flattenedYears = [years];
    }
    // add to *set* for de-duplication of years
    flattenedYears.forEach(year => yearSet.add(year));
  }

  const result = [];
  // convert back to array, but possibly out of order
  yearSet.forEach(member => result.push(member));
  // therefore sort numerically ascending
  return result.sort();
};

// CE
class AXADatepicker extends NoShadowDOM {
  static get tagName() {
    return 'axa-datepicker';
  }

  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      'data-test-id': { type: String, reflect: true },
      open: { type: Boolean, reflect: true },
      value: { type: String },
      defaultValue: { type: String },
      name: { type: String, reflect: true },
      locale: { type: String, reflect: true },
      date: {
        type: Object,
        converter: {
          fromAttribute: value => (value ? new Date(value) : null),
          toAttribute: value => (value ? value.toISOString() : null),
        },
      },
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
      placeholder: { type: String },
      monthtitle: { type: String },
      yeartitle: { type: String },
      invaliddatetext: { type: String },
      error: { type: String, reflect: true },
      embedded: { type: Boolean, reflect: true },
    };
  }

  set value(newValue) {
    const {
      state: { isControlled, value },
      state,
    } = this;
    // first value coming in indicates controlledness?
    if (!isControlled && newValue !== undefined) {
      // yes, remember in model state
      state.isControlled = true;
    }
    // update state
    state.value = newValue;
    this.validate(newValue);
    // manual re-render, necessary for custom setters
    this.requestUpdate('value', value);
  }

  get value() {
    const {
      input = { value: '' },
      state: { isControlled, value },
    } = this;
    return isControlled ? value : input.value;
  }

  set date(value) {
    if (value && value instanceof Date) {
      const oldValue = this._date;
      this.initDate(value);
      this.requestUpdate('date', oldValue);
    }
  }

  get date() {
    return this._date;
  }

  constructor() {
    super();
    // internal model state
    this.state = {};
    // property initializations
    this.locale = 'de-CH';
    this.open = false;
    this.inverted = false;
    this.name = '';
    this.labelbuttoncancel = 'Schliessen';
    this.labelbuttonok = 'OK';
    this.placeholder = 'Please select a date';
    this.monthtitle = 'Choose Month';
    this.yeartitle = 'Choose Year';
    this.invaliddatetext = 'Invalid date';
    this.startDate = new Date();
    this.year = this.startDate.getFullYear();
    this.month = this.startDate.getMonth();
    this.day = this.startDate.getDate();
    this.allowedyears = [this.year];
    this.outputdate = '';
    this.onChange = EMPTY_FUNCTION;
    this.onDateChange = EMPTY_FUNCTION;
    this.onBlur = EMPTY_FUNCTION;
    this.onFocus = EMPTY_FUNCTION;
    this.handleWindowKeyDown = this.handleWindowKeyDown.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.debouncedHandleViewportCheck = debounce(
      () => this.handleViewportCheck(this.input),
      250
    );
  }

  shouldUpdate(changedProperties) {
    if (changedProperties.has('value')) {
      const {
        isReact,
        state: { isControlled },
      } = this;
      // controlledness is a React-only concept
      this.state.isControlled = isReact && isControlled;
    }
    if (changedProperties.has('allowedyears')) {
      this.allowedyears = parseAndFormatAllowedYears(
        this.allowedyears,
        this.year
      );
    }
    return true;
  }

  render() {
    const {
      _date,
      state: { isControlled, value },
    } = this;

    const [month, year] = [
      _date ? _date.getMonth() : this.month,
      _date ? _date.getFullYear() : this.year,
    ];

    this.monthitems = getAllLocaleMonthsArray(this.locale).map(
      (item, index) => ({
        selected: index === month,
        name: item.toString(),
        value: index.toString(),
      })
    );

    this.yearitems = this.allowedyears.map(item => ({
      selected: item === year,
      name: item.toString(),
      value: item.toString(),
    }));

    return html`
      <article class="m-datepicker" @click="${this.handleDatepickerClick}">
        ${this.inputfield &&
          html`
            <div class="m-datepicker__input-wrap">
              <input
                @input="${this.handleInputChange}"
                @blur="${this.handleBlur}"
                @focus="${this.onFocus}"
                class="m-datepicker__input js-datepicker__input"
                type="text"
                name="${this.name}"
                placeholder="${this.placeholder}"
                .value="${isControlled ? value : this.outputdate}"
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
        ${this.open || !this.inputfield
          ? html`
              <div class="m-datepicker__wrap js-datepicker__wrap">
                <div class="m-datepicker__article">
                  <div class="m-datepicker__dropdown-wrap">
                    <axa-dropdown
                      @axa-change="${this.handleChangeDropdownMonth}"
                      class="m-datepicker__dropdown m-datepicker__dropdown-month js-datepicker__dropdown-month"
                      max-height
                      items="${JSON.stringify(this.monthitems)}"
                      title="${this.monthtitle}"
                      embedded
                    >
                    </axa-dropdown>

                    <axa-dropdown
                      @axa-change="${this.handleChangeDropdownYear}"
                      class="m-datepicker__dropdown m-datepicker__dropdown-year js-datepicker__dropdown-year"
                      max-height
                      items="${JSON.stringify(this.yearitems)}"
                      title="${this.yeartitle}"
                      embedded
                    >
                    </axa-dropdown>
                  </div>

                  <div class="m-datepicker__weekdays">
                    ${this.weekdays &&
                      this.weekdays.map(
                        day =>
                          html`
                            <span class="m-datepicker__weekdays-day"
                              >${day}</span
                            >
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
                      variant="secondary"
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
            `
          : ''}
        ${!this.embedded
          ? html`
              <span class="m-datepicker__error"
                >${this.error && this.invaliddatetext}</span
              >
            `
          : html``}
      </article>
    `;
  }

  firstUpdated() {
    this.input = this.querySelector('.js-datepicker__input');

    window.addEventListener('keydown', this.handleWindowKeyDown);
    window.addEventListener('click', this.handleBodyClick);

    const {
      input,
      state: { isControlled },
      isReact,
      defaultValue,
    } = this;

    if (input) {
      window.setTimeout(() => {
        window.addEventListener('resize', this.debouncedHandleViewportCheck);
        window.addEventListener('scroll', this.debouncedHandleViewportCheck);
        this.handleViewportCheck(input);
      }, 100);

      if (isReact && defaultValue) {
        input.value = defaultValue;
      }
    }

    if (!isControlled) {
      this.initDate();
    }
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.handleWindowKeyDown);
    window.removeEventListener('click', this.handleBodyClick);
    window.removeEventListener('resize', this.debouncedHandleViewportCheck);
    window.removeEventListener('scroll', this.debouncedHandleViewportCheck);
  }

  // Methods
  initDate(date) {
    if (date) {
      this.startDate = date;
      this.year = date.getFullYear();
      this.month = date.getMonth();
      this.day = date.getDate();
    }
    const { year, month, day, allowedyears, locale, startDate } = this;

    if (year >= 0) {
      startDate.setFullYear(year);
    }

    if (month >= 0 && typeof month === 'number') {
      startDate.setMonth(month);
    }

    if (typeof day === 'number') {
      // day 1 = first day, day 0 = last day of prev. month
      // day -1 = one day before last day of prev. month, ...
      startDate.setDate(day);
    }

    this._date = startDate;
    const { _date } = this;
    _date.setHours(0);
    _date.setMinutes(0);
    _date.setSeconds(0);

    this.allowedyears = parseAndFormatAllowedYears(allowedyears, year);

    this.store = new Store(locale, _date, this.allowedyears);
    this.cells = this.store.getCells();
    this.weekdays = getWeekdays(_date, this.locale);
  }

  handleViewportCheck(baseElem) {
    if (shouldMove(baseElem)) {
      if (!this.inverted) {
        this.inverted = true;
      }
    } else {
      this.inverted = false;
    }
  }

  toggleDatepicker() {
    if (!this.open) {
      if (openDatepickerInstance && openDatepickerInstance !== this) {
        openDatepickerInstance.open = false;
      }
      this.open = true;
      openDatepickerInstance = this;
      applyEffect(this);
    } else {
      openDatepickerInstance = null;
      applyEffect(this).then(() => {
        this.open = false;
      });
    }
  }

  updateDatepickerProps(date) {
    this.month = date.getMonth();
    this.day = date.getDate();
    this.year = date.getFullYear();
    this.initDate();
  }

  validate(value, pure) {
    const { locale, invaliddatetext, allowedyears } = this;
    const validDate = parseLocalisedDateIfValid(locale, value);
    const validYear = date => allowedyears.indexOf(date.getFullYear()) > -1;
    const isValid = validDate && validYear(validDate);
    if (pure) {
      return isValid ? validDate : null;
    }
    this.error = null;
    if (isValid) {
      this._date = validDate;
      this.updateDatepickerProps(validDate);
      this.outputdate = validDate.toLocaleString(locale, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      });
    } else if (value && invaliddatetext) {
      this.error = invaliddatetext;
      this._date = null;
      this.outputdate = '';
    }
    return this._date;
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
      this.toggleDatepicker();
    }
  }

  handleChangeDropdownMonth(e) {
    e.preventDefault();
    const month = e.detail;
    if (month) {
      const newDate = new Date(this.year, month, this.day);
      this._date = newDate;
      this.updateDatepickerProps(this._date);
    }
  }

  handleChangeDropdownYear(e) {
    e.preventDefault();
    const year = e.detail;
    if (year) {
      const parsedDate = new Date(this._date);
      parsedDate.setFullYear(year);
      this._date = parsedDate;
      this.updateDatepickerProps(this._date);
    }
  }

  handleInputButtonClick(e) {
    e.stopPropagation();
    if (this.inputfield) {
      this.toggleDatepicker();
    }
  }

  handleInputChange(e) {
    const {
      onChange = EMPTY_FUNCTION,
      input,
      state,
      onDateChange = EMPTY_FUNCTION,
    } = this;
    onChange(e);
    const validDate = this.validate(input.value, true);
    if (validDate) {
      onDateChange(validDate);
    }
    if (state.isControlled) {
      const { value: stateValue } = state;
      input.value = stateValue;
    }
  }

  handleBlur(e) {
    const { input, onBlur } = this;
    this.validate(input.value);
    onBlur(e);
  }

  handleButtonOkClick() {
    const {
      locale,
      _date,
      inputfield,
      input,
      onChange,
      onDateChange,
      state: { isControlled, value: stateValue },
    } = this;
    const value = _date.toLocaleString(locale, {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    this.outputdate = value;
    onChange({ target: { value } });
    onDateChange(_date);
    if (inputfield) {
      this.toggleDatepicker();
      input.value = isControlled ? stateValue : value;
    }
  }

  handleButtonCancelClick() {
    this.toggleDatepicker();
  }

  handleDatepickerCalendarCellClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.blur(); // prevent the ugly focus ring after the click
    const cellIndex = parseInt(e.target.dataset.index, 10);
    const date = e.target.dataset.value;
    this.index = cellIndex;
    this._date = new Date(date);
    this.updateDatepickerProps(this._date);

    this.monthitems = getAllLocaleMonthsArray(this.locale).map(
      (item, index) => ({
        selected: index === this.month,
        name: item.toString(),
        value: index.toString(),
      })
    );

    this.yearitems = this.allowedyears.map(item => ({
      selected: item === this.year,
      name: item.toString(),
      value: item.toString(),
    }));
  }
}

defineOnce(AXADatepicker.tagName, AXADatepicker);
export default AXADatepicker;
