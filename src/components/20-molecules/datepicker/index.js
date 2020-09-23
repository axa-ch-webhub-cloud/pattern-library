/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
import AXADropdown from '@axa-ch/dropdown';
import {
  Date_rangeSvg,
  Keyboard_arrow_leftSvg,
  Keyboard_arrow_rightSvg,
} from '@axa-ch/materials/icons';
import { formatISO } from 'date-fns';
import { html, svg } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import {
  defineVersioned,
  versionedHtml,
} from '../../../utils/component-versioning';
import createRefId from '../../../utils/create-ref-id';
import fireCustomEvent from '../../../utils/custom-event';
import debounce from '../../../utils/debounce';
import NoShadowDOM from '../../../utils/no-shadow';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';
import {
  getAllLocaleMonthsArray,
  getMonthMatrix,
  getWeekdays,
  parseLocalisedDateIfValid,
  range,
} from './utils/date';

// module constants
const dateRangeIcon = svg([Date_rangeSvg]);
const keyboardArrowLeftIcon = svg([Keyboard_arrow_leftSvg]);
const keyboardArrowRightIcon = svg([Keyboard_arrow_rightSvg]);
const EMPTY_FUNCTION = () => {};

// module globals
let openDatepickerInstance;

// helper functions
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

// export: needed in unit tests
export const parseAndFormatAllowedYears = (allowedyears = [], setYear) => {
  const yearSet = new Set();
  const inputYears = [...allowedyears];

  // use setYear just as a default option if no allowedyears are given
  if (!allowedyears || allowedyears.length === 0) {
    inputYears.push(setYear);
  }

  for (let i = 0, n = inputYears.length, years, flattenedYears; i < n; i++) {
    years = inputYears[i];
    // skip over non-year-like entities
    if (!/^[\d-]+$/.test(`${years}`)) {
      // eslint-disable-next-line no-continue
      continue;
    }
    // a year range like '2019-2024'?
    if (typeof years === 'string') {
      let [fromYear, toYear] = years.split('-');
      fromYear = parseInt(fromYear, 10);
      toYear = parseInt(toYear, 10);
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(fromYear) || isNaN(toYear)) {
        throw new Error('illegal year range');
      }
      flattenedYears = range(fromYear, toYear);
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

// gather all native Date-object setters in one place
const overrideDate = (year, month, day, date) => {
  let _day = day;

  if (typeof year === 'number' && year >= 0) {
    date.setFullYear(year);
  }

  if (typeof month === 'number' && month >= 0) {
    date.setMonth(month);
    // month not changed as desired since target day unavailable?
    // (e.g. July 31 =/=> June 31)
    if (date.getMonth() !== month) {
      // then choose last day of previous month to correct that
      _day = 0;
    }
  }

  if (typeof _day === 'number') {
    // day 1 = first day, day 0 = last day of prev. month
    // day -1 = one day before last day of prev. month, ...
    date.setDate(_day);
  }

  date.setHours(0, 0, 0, 0); // exactly midnight

  return date;
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
      placeholder: { type: String, defaultValue: 'Please select a date' },
      monthtitle: { type: String, defaultValue: 'Choose month' },
      yeartitle: { type: String, defaultValue: 'Choose year' },
      invalid: { type: Boolean, reflect: true },
      invaliddatetext: { type: String, defaultValue: 'Invalid date' },
      error: { type: String, reflect: true },
      width: { type: String, reflect: true, defaultValue: '100%' },
      disabled: { type: Boolean, reflect: true },
      required: { type: Boolean, reflect: true },
      label: { type: String, reflect: true },
      checkMark: { type: Boolean, reflect: true },
      autofocus: { type: Boolean, reflect: true },
      onChange: { type: Function, attribute: false },
      onDateChange: { type: Function, attribute: false },
      onFocus: { type: Function, attribute: false },
      onBlur: { type: Function, attribute: false },
      onInputfieldKeyUp: { type: Function, attribute: false },
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
    // manual re-render, necessary for custom setters
    this.requestUpdate('value', value);
  }

  get isControlled() {
    return this.state.isControlled && this.isReact;
  }

  get value() {
    const {
      inputfield,
      input,
      state: { value },
    } = this;
    const inputFieldValue = inputfield && input ? input.value : '';
    return this.isControlled ? value : inputFieldValue;
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
    return parseLocalisedDateIfValid(date);
  }

  constructor() {
    super();
    // internal model state
    this.state = {};
    applyDefaults(this);
    this.handleWindowKeyDown = this.handleWindowKeyDown.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);

    this.debouncedHandleViewportCheck = debounce(
      () => this.handleViewportCheck(this.input),
      250
    );

    // ensure we use the versioned variant of axa-dropdown internally
    /* eslint-disable no-undef */
    defineVersioned([AXADropdown], __VERSION_INFO__, this);
    /* eslint-enable no-undef */
  }

  // throttle re-rendering to once per frame (too many updates with default microtask timing before...)
  performUpdate() {
    new Promise(resolve =>
      window.requestAnimationFrame(() => resolve())
    ).then(() => super.performUpdate());
  }

  shouldUpdate(changedProperties) {
    if (changedProperties.has('allowedyears')) {
      this.allowedyears = parseAndFormatAllowedYears(
        this.allowedyears,
        this.year
      );
    }
    if (changedProperties.has('value')) {
      this.validate(this.value);
    }
    return true;
  }

  render() {
    const {
      _date,
      state,
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

    const {
      width = '100%',
      error,
      invalid,
      invaliddatetext,
      style,
      _selectedDate,
    } = this;
    const needToShowError = (error || invalid) && invaliddatetext;

    const getFormattedStyle = parameter =>
      `${parameter}${/^\d+$/.test(parameter) ? 'px' : ''}`;

    style.width = getFormattedStyle(width); // set width to component's css

    const cellClasses = ({ sameMonth, today, inactive, value }) => {
      const selected = _selectedDate === value;
      const isToday = !selected && today;

      return classMap({
        'm-datepicker__calendar-cell': true,
        'js-datepicker__calender-body__cell': true,
        'm-datepicker__calendar-not-current-month': !sameMonth,
        'm-datepicker__calendar-current-month': sameMonth,
        'm-datepicker__calendar-today': isToday,
        'm-datepicker__calendar-selected-day': selected,
        'm-datepicker__calendar-day--inactive': inactive,
      });
    };

    const monthDropdown = versionedHtml(this)`
        <axa-dropdown
          @axa-change="${this.handleChangeDropdownMonth}"
          class="m-datepicker__dropdown m-datepicker__dropdown-month js-datepicker__dropdown-month"
          maxheight="270"
          items="${JSON.stringify(this.monthitems)}"
          defaulttitle="${this.monthtitle}"
        >
        </axa-dropdown>
      `;

    const yearDropdown = versionedHtml(this)`
    <axa-dropdown
      @axa-change="${this.handleChangeDropdownYear}"
      class="m-datepicker__dropdown m-datepicker__dropdown-year js-datepicker__dropdown-year"
      maxheight="270"
      items="${JSON.stringify(this.yearitems)}"
      defaulttitle="${this.yeartitle}"
    >
    </axa-dropdown>`;

    const noPreviousAllowedYear = year === this.navigateYear(-1) && month === 0;
    const noNextAllowedYear = year === this.navigateYear() && month === 11;

    return html`
      <article class="m-datepicker" @click="${this.handleDatepickerClick}">
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
              <div class="m-datepicker__input-wrap">
                <input
                  id="${refId}"
                  @input="${this.handleInputChange}"
                  @blur="${this.handleBlur}"
                  @focus="${this.onFocus}"
                  @change="${e => e.stopPropagation()}"
                  @keyup="${this.onInputfieldKeyUp}"
                  class="m-datepicker__input js-datepicker__input"
                  type="text"
                  name="${this.name}"
                  placeholder="${this.placeholder}"
                  .value="${this.isControlled ? state.value : this.outputdate}"
                  ?disabled="${disabled}"
                />
                <button
                  type="button"
                  class="m-datepicker__input-button js-datepicker__input-button"
                  @click="${this.handleInputButtonClick}"
                >
                  ${dateRangeIcon}
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
                    ${monthDropdown} ${yearDropdown}
                  </div>

                  <div class="m-datepicker__weekdays">
                    <div class="m-datepicker__weekdays-inner">
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
                              class="${cellClasses(cell)}"
                            >
                              ${cell.text}
                            </button>
                          `
                      )}
                  </div>
                </div>
                <button
                  class="m-datepicker__button m-datepicker__button-prev"
                  @click=${this.handleNavigateToPrevMonth}
                  ?disabled=${noPreviousAllowedYear}
                >
                  ${keyboardArrowLeftIcon}
                </button>
                <button
                  class="m-datepicker__button m-datepicker__button-next"
                  @click=${this.handleNavigateToNextMonth}
                  ?disabled=${noNextAllowedYear}
                >
                  ${keyboardArrowRightIcon}
                </button>
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

    if (this.isControlled) {
      return;
    }

    this.startDate = overrideDate(year, month, day, startDate);

    this.initDate();
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

  initDate(date, options = {}) {
    if (date) {
      // eslint-disable-next-line no-restricted-globals
      const isValidDateObject = date instanceof Date && !isNaN(+date);
      if (isValidDateObject) {
        this.startDate = date;
        this.day = date.getDate();
        this.year = date.getFullYear();
        this.month = date.getMonth();
      }
    }

    if (this.allowedyears && !this.allowedyears.includes(this.year)) {
      // to avoid that datepicker don't show any days to select and looks like "empty"
      const [newStartYear] = this.allowedyears;
      this.year = newStartYear;
    }

    const { year, month, day, allowedyears, locale, startDate } = this;

    this._date = overrideDate(year, month, day, startDate);
    const { _date } = this;

    this.allowedyears = parseAndFormatAllowedYears(allowedyears, year);

    this.cells = getMonthMatrix(_date, this.allowedyears);
    this.weekdays = getWeekdays(_date, locale);

    const { output, tentative } = options;

    if (output) {
      this.outputdate = this.formatDate(_date);
    }

    if (output || !tentative) {
      this._selectedDate = formatISO(_date);
    }

    return this.outputdate;
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
    const { invaliddatetext, allowedyears } = this;
    const validDate = parseLocalisedDateIfValid(value);
    const validYear = date => allowedyears.indexOf(date.getFullYear()) > -1;
    const isValid = validDate && validYear(validDate);
    if (pure) {
      return isValid ? validDate : null;
    }
    this.error = null;
    if (isValid) {
      this.initDate(validDate, { output: true }); // sets this._date
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
    const month = parseInt(e.detail, 10);
    if (typeof month === 'number') {
      this.initDate(overrideDate(null, month, null, this._date), {
        tentative: true,
      });
    }
  }

  handleChangeDropdownYear(e) {
    e.preventDefault();
    const year = parseInt(e.detail, 10);
    if (typeof year === 'number') {
      this.initDate(overrideDate(year, null, null, this._date), {
        tentative: true,
      });
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
    if (this.isControlled) {
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

  fireEvents(validDate) {
    if (validDate) {
      const { name } = this;
      const value = this.formatDate(validDate);
      const details = { value, date: validDate, name };
      fireCustomEvent('axa-change', value, this, { bubbles: false });
      fireCustomEvent('change', details, this, { bubbles: false });
    }
  }

  handleDatepickerCalendarCellClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.target.blur(); // prevent the ugly focus ring after the click

    const cellIndex = parseInt(e.target.dataset.index, 10);
    const date = e.target.dataset.value;
    this.index = cellIndex;
    const value = this.initDate(new Date(date), { output: true });
    this.setMonthAndYearItems();

    const {
      _date,
      inputfield,
      input,
      onChange,
      onDateChange,
      state: { value: stateValue },
    } = this;
    onChange({ target: { value } });
    onDateChange(_date);
    this.fireEvents(_date);
    if (inputfield) {
      this.toggleDatepicker();
      input.value = this.isControlled ? stateValue : value;
    }
    // since the calendar UI only allows legal dates to be picked,
    // any preexisting error should be cleared
    this.error = null;
  }

  handleNavigateToPrevMonth() {
    this.navigateMonth(-1);
  }

  handleNavigateToNextMonth() {
    this.navigateMonth();
  }

  // Navigates to the next allowed month, when offset = 1.
  // Navigates to the previous allowed month, when offset = -1.
  // Has no effect, when there is no next/previous allowed month.
  navigateMonth(offset = 1) {
    const MIN = 0;
    const MAX = 11;
    const { min, max, abs } = Math;

    let month = parseInt(this.month, 10) + offset;
    let year = parseInt(this.year, 10);

    // Month out of bounds?
    if (month < MIN || month > MAX) {
      // Clamp month to valid range
      month = min(max(month, MIN), MAX);

      // Try to adjust year (might fail if not an allowed year)
      year = this.navigateYear(offset);

      // Year adjustment succeeded?
      if (year !== this.year) {
        // Correct month
        month = abs(month - MAX);
      }
    }

    this.initDate(overrideDate(year, month, null, this._date), {
      tentative: true,
    });
  }

  // Returns the next allowed year, when offset = 1.
  // Returns the previous allowed year, when offset = -1.
  // Returns the currently selected year, when there is no next/previous allowed year.
  navigateYear(offset = 1) {
    const MIN = 0;
    const MAX = this.allowedyears.length - 1;
    const { min, max } = Math;

    let indexOfYear = this.allowedyears.findIndex(year => year === this.year);

    indexOfYear += offset;
    indexOfYear = min(max(indexOfYear, MIN), MAX); // prevent out-of-bounds navigation

    return parseInt(this.allowedyears[indexOfYear], 10);
  }
}

/* eslint-disable no-undef */
defineVersioned([AXADatepicker], __VERSION_INFO__);

export default AXADatepicker;
