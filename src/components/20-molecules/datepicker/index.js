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
import { applyDefaults } from '../../../utils/with-react';
import debounce from '../../../utils/debounce';
import createRefId from '../../../utils/create-ref-id';
import fireCustomEvent from '../../../utils/custom-event';

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
        resolve();
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

const parseAndFormatAllowedYears = (allowedyears = [], setYear) => {
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
      value: { type: String, defaultValue: undefined }, // proper default for controlled-mode under React
      defaultValue: { type: String },
      name: { type: String, reflect: true },
      locale: { type: String, reflect: true, defaultValue: 'de-CH' },
      date: {
        type: Object,
        converter: {
          fromAttribute: value => (value ? new Date(value) : null),
          toAttribute: value => (value ? value.toISOString() : null),
        },
        defaultValue: new Date(),
      },
      outputdate: { type: String, reflect: true },
      year: { type: Number, reflect: true, defaultValue: undefined },
      month: { type: Number, reflect: true, defaultValue: undefined },
      day: { type: Number, reflect: true, defaultValue: undefined },
      refId: { type: String, defaultValue: `datepicker-${createRefId()}` },
      inverted: { type: Boolean, reflect: true },
      inputfield: { type: Boolean, reflect: true },
      allowedyears: { type: Array, reflect: true },
      monthitems: { type: Array },
      yearitems: { type: Array },
      cells: { type: Array },
      labelbuttoncancel: { type: String, defaultValue: 'Close' },
      labelbuttonok: { type: String, defaultValue: 'OK' },
      placeholder: { type: String, defaultValue: 'Please select a date' },
      monthtitle: { type: String, defaultValue: 'Choose month' },
      yeartitle: { type: String, defaultValue: 'Choose year' },
      invalid: { type: Boolean, reflect: true },
      invaliddatetext: { type: String, defaultValue: 'Invalid date' },
      error: { type: String, reflect: true },
      height: { type: String, reflect: true, defaultValue: '40' },
      width: { type: String, reflect: true, defaultValue: 'auto' },
      disabled: { type: Boolean, reflect: true },
      required: { type: Boolean, reflect: true },
      label: { type: String, reflect: true },
      checkMark: { type: Boolean, reflect: true },
      autofocus: { type: Boolean, reflect: true },
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
      inputfield,
      input,
      state: { isControlled, value },
    } = this;
    const inputFieldValue = inputfield && input ? input.value : '';
    return isControlled ? value : inputFieldValue;
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

  setMonthAndYearItems(month, year) {
    const _month = typeof month === 'number' ? month : this.month;
    const _year = typeof year === 'number' ? year : this.year;

    this.monthitems = getAllLocaleMonthsArray(this.locale).map(
      (item, index) => ({
        selected: index === _month,
        name: item.toString(),
        value: index.toString(),
      })
    );

    this.yearitems = this.allowedyears.map(item => ({
      selected: item === _year,
      name: item.toString(),
      value: item.toString(),
    }));
  }

  formatDate(date) {
    return date.toLocaleString(this.locale, {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
  }

  constructor() {
    super();
    // internal model state
    this.state = {};
    applyDefaults(this);
    this.handleWindowKeyDown = this.handleWindowKeyDown.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);

    this.onChange = EMPTY_FUNCTION;
    this.onDateChange = EMPTY_FUNCTION;
    this.onBlur = EMPTY_FUNCTION;
    this.onFocus = EMPTY_FUNCTION;

    this.debouncedHandleViewportCheck = debounce(
      () => this.handleViewportCheck(this.input),
      250
    );
  }

  // throttle re-rendering to once per frame (too many updates with default microtask timing before...)
  performUpdate() {
    new Promise(resolve => window.requestAnimationFrame(() => resolve())).then(
      () => super.performUpdate()
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
      refId = '',
      label,
      required,
      disabled,
      checkMark,
    } = this;

    const [month, year] = [
      _date ? _date.getMonth() : this.month,
      _date ? _date.getFullYear() : this.year,
    ];

    this.setMonthAndYearItems(month, year);

    const { width = 'auto', height = '40', error, invalid, style } = this;

    const formattedStyle = parameter =>
      `${parameter}${/^\d+$/.test(parameter) ? 'px' : ''}`;

    let formattedWidth = `width:${formattedStyle(width)}`;
    let formattedHeight = `height:${formattedStyle(height)}`;

    // % on html width or height attribute not allowed, so set it as css attribute
    if (width.indexOf('%') > -1) {
      style.width = width;
      formattedWidth = ''; // do not set width to childs in this case
    } else {
      style.width = null;
    }

    if (height.indexOf('%') > -1) {
      style.height = height;
      formattedHeight = ''; // do not set height to childs in this case
    } else {
      style.height = null;
    }

    const needToShowError = error || invalid;

    return html`
      <article
        class="m-datepicker"
        @click="${this.handleDatepickerClick}"
        style="${formattedWidth}"
      >
        ${label &&
          html`
            <label for="${refId}" class="m-datepicker__label">
              ${label}
              ${required
                ? html`
                    *
                  `
                : ''}
            </label>
          `}
        ${!this.inputfield
          ? ''
          : html`
              <div class="m-datepicker__input-wrap" style="${formattedWidth}">
                <input
                  id="${refId}"
                  @input="${this.handleInputChange}"
                  @blur="${this.handleBlur}"
                  @focus="${this.onFocus}"
                  @change="${e => e.stopPropagation()}"
                  class="m-datepicker__input js-datepicker__input"
                  type="text"
                  name="${this.name}"
                  placeholder="${this.placeholder}"
                  style="${formattedHeight}"
                  .value="${isControlled ? value : this.outputdate}"
                  ?disabled="${disabled}"
                />
                <button
                  type="button"
                  class="m-datepicker__input-button js-datepicker__input-button"
                  style="${formattedHeight}"
                  @click="${this.handleInputButtonClick}"
                >
                  ${dateInputIcon}
                </button>
                ${checkMark
                  ? html`
                      <span class="m-datepicker__check-wrapper">
                        <span class="m-datepicker__check"></span>
                      </span>
                    `
                  : ''}
              </div>
            `}
        ${(this.open && !disabled) || !this.inputfield
          ? html`
              <div class="m-datepicker__wrap js-datepicker__wrap">
                <div class="m-datepicker__article">
                  <div class="m-datepicker__dropdown-wrap">
                    <axa-dropdown
                      @axa-change="${this.handleChangeDropdownMonth}"
                      class="m-datepicker__dropdown m-datepicker__dropdown-month js-datepicker__dropdown-month"
                      maxheight
                      items="${JSON.stringify(this.monthitems)}"
                      defaulttitle="${this.monthtitle}"
                      data-usecase="datepicker"
                    >
                    </axa-dropdown>

                    <axa-dropdown
                      @axa-change="${this.handleChangeDropdownYear}"
                      class="m-datepicker__dropdown m-datepicker__dropdown-year js-datepicker__dropdown-year"
                      maxheight
                      items="${JSON.stringify(this.yearitems)}"
                      defaulttitle="${this.yeartitle}"
                      data-usecase="datepicker"
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
                      .disabled="${!_date}"
                      >${this.labelbuttonok}</axa-button
                    >
                  </div>
                </div>
              </div>
            `
          : ''}
        ${needToShowError
          ? html`
              <span class="m-datepicker__error">${this.invaliddatetext}</span>
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
      day,
      month,
      year,
      autofocus,
      startDate,
    } = this;

    if (input) {
      if (autofocus) {
        input.focus();
      }
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
      this.initDate(
        null,
        year || startDate.getFullYear(),
        month || startDate.getMonth(),
        day || startDate.getDate()
      );
    }
  }

  updated(changedProperties) {
    if (changedProperties.has('open') && this.open) {
      applyEffect(this);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.handleWindowKeyDown);
    window.removeEventListener('click', this.handleBodyClick);
    window.removeEventListener('resize', this.debouncedHandleViewportCheck);
    window.removeEventListener('scroll', this.debouncedHandleViewportCheck);
  }

  // Methods
  initDate(date, setyear, setmonth, setday) {
    if (date) {
      // eslint-disable-next-line no-restricted-globals
      const isValidDateObject = date instanceof Date && !isNaN(+date);
      if (isValidDateObject) {
        this.startDate = date;
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.day = date.getDate();
      }
    }
    const {
      year: _year,
      month: _month,
      day: _day,
      allowedyears,
      locale,
      startDate,
    } = this;

    const year = typeof setyear === 'number' ? setyear : _year;
    const month = typeof setmonth === 'number' ? setmonth : _month;
    let day = typeof setday === 'number' ? setday : _day;

    if (typeof year === 'number' && year >= 0) {
      startDate.setFullYear(year);
    }

    if (typeof month === 'number' && month >= 0) {
      startDate.setMonth(month);
      // month not changed as desired due to because target day unavailable there?
      // (e.g. July 31 =/=> June 31)
      if (startDate.getMonth() !== month) {
        // then choose last day of previous month to correct that
        day = 0;
      }
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
    const calendar = this.querySelector('.js-datepicker__wrap');
    if (!calendar) {
      return;
    }
    const bodyRectangle = {
      top: 0,
      bottom: document.documentElement.scrollHeight,
    };
    const calendarRectangle = calendar.getBoundingClientRect();
    const calendarBelowPage = calendarRectangle.bottom > bodyRectangle.bottom;
    const calendarAbovePage = calendarRectangle.top < bodyRectangle.top;
    const newInverted =
      calendarBelowPage || (shouldMove(baseElem) && !calendarAbovePage);
    if (newInverted !== this.inverted) {
      this.inverted = newInverted;
    }
  }

  toggleDatepicker() {
    if (!this.open) {
      if (openDatepickerInstance && openDatepickerInstance !== this) {
        openDatepickerInstance.open = false;
      }
      this.open = true;
      openDatepickerInstance = this;
    } else {
      openDatepickerInstance = null;
      applyEffect(this).then(() => {
        this.open = false;
      });
    }
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
      this.initDate(validDate);
      this.outputdate = this.formatDate(validDate);
    } else if (value && invaliddatetext) {
      this.error = invaliddatetext;
      this._date = null;
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
    fireCustomEvent('axa-dropdown-close', null, window);
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
      this.initDate(this._date, null, month | 0, null);
    }
  }

  handleChangeDropdownYear(e) {
    e.preventDefault();
    const year = e.detail;
    if (year) {
      this.initDate(this._date, year | 0, null, null);
    }
  }

  handleInputButtonClick(e) {
    e.stopPropagation();
    if (this.inputfield) {
      this.initDate(this._date);
      this.toggleDatepicker();
    }
  }

  handleInputChange(e) {
    const {
      onChange = EMPTY_FUNCTION,
      input,
      state,
      name,
      onDateChange = EMPTY_FUNCTION,
    } = this;
    onChange(e);
    const validDate = this.validate(input.value, true);
    fireCustomEvent(
      'axa-input',
      { value: input.value, date: validDate, name },
      this
    );
    if (validDate) {
      onDateChange(validDate);
    }
    if (state.isControlled) {
      const { value: stateValue } = state;
      input.value = stateValue;
    } else if (validDate) {
      this.fireEvents(validDate);
    }
  }

  handleBlur(e) {
    const { input, onBlur } = this;
    this.validate(input.value);
    onBlur(e);
  }

  handleButtonOkClick() {
    const {
      _date,
      inputfield,
      input,
      onChange,
      onDateChange,
      state: { isControlled, value: stateValue },
    } = this;
    const value = this.formatDate(_date);
    this.outputdate = value;
    onChange({ target: { value } });
    onDateChange(_date);
    this.fireEvents(_date);
    if (inputfield) {
      this.toggleDatepicker();
      input.value = isControlled ? stateValue : value;
    }
    // since the calendar UI only allows legal dates to be picked,
    // any preexisting error should be cleared
    this.error = null;
  }

  fireEvents(validDate) {
    if (validDate) {
      const { name } = this;
      const value = this.formatDate(validDate);
      const details = { value, date: validDate, name };
      fireCustomEvent('axa-change', value, this, { bubbles: false });
      fireCustomEvent('change', details, this, { bubbles: false });
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
    this.initDate(new Date(date));
    this.setMonthAndYearItems();
  }
}

defineOnce(AXADatepicker.tagName, AXADatepicker);
export default AXADatepicker;
