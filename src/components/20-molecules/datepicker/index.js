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

const parseAndFormatAllowedYears = ({ allowedyears, year }) => {
  let result = [year];
  allowedyears.forEach(years => {
    if (typeof years === 'string') {
      const splitYears = years.split('-');
      const generatedYears = range(
        parseInt(splitYears[0], 10),
        parseInt(splitYears[1], 10)
      );
      result = result.concat(generatedYears);
    } else {
      result.push(years);
    }
  });

  return result.filter((item, index) => result.indexOf(item) >= index).sort();
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
      name: { type: String, reflect: true },
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
      placeholder: { type: String },
      monthtitle: { type: String },
      yeartitle: { type: String },
      invaliddatetext: { type: String },
      error: { type: String, reflect: true },
    };
  }

  set value(newValue) {
    const {
      state: { isControlled, value },
    } = this;
    // first value coming in indicates controlledness?
    if (!isControlled && newValue !== undefined) {
      // yes, remember in model state
      this.state.isControlled = true;
    }
    // update state
    this.state.value = newValue;
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
      this.allowedyears = parseAndFormatAllowedYears(this);
    }
    return true;
  }

  render() {
    const {
      date,
      state: { isControlled, value },
    } = this;

    const [month, year] = [
      date ? date.getMonth() : this.month,
      date ? date.getFullYear() : this.year,
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
        <span class="m-datepicker__error"
          >${this.error && this.invaliddatetext}</span
        >
      </article>
    `;
  }

  firstUpdated() {
    this.input = this.querySelector('.js-datepicker__input');

    window.addEventListener('keydown', this.handleWindowKeyDown);
    window.addEventListener('click', this.handleBodyClick);

    if (this.input) {
      window.setTimeout(() => {
        window.addEventListener('resize', this.debouncedHandleViewportCheck);
        window.addEventListener('scroll', this.debouncedHandleViewportCheck);
        this.handleViewportCheck(this.input);
      }, 100);
    }

    this.initDate();
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.handleWindowKeyDown);
    window.removeEventListener('click', this.handleBodyClick);
    window.removeEventListener('resize', this.debouncedHandleViewportCheck);
    window.removeEventListener('scroll', this.debouncedHandleViewportCheck);
  }

  // Methods
  initDate() {
    // not first-time initialization?
    if (this.store) {
      return;
    }

    if (this.year >= 0) {
      this.startDate.setFullYear(this.year);
    }

    if (this.month >= 0 && typeof this.month === 'number') {
      this.startDate.setMonth(this.month);
    }

    if (typeof this.day === 'number') {
      // day 1 = first day, day 0 = last day of prev. month
      // day -1 = one day before last day of prev. month, ...
      this.startDate.setDate(this.day);
    }
    this.startDate.setHours(0);
    this.startDate.setMinutes(0);
    this.startDate.setSeconds(0);

    this.allowedyears = parseAndFormatAllowedYears(this);

    this.date = this.startDate;
    this.store = new Store(this.locale, this.date, this.allowedyears);
    this.cells = this.store.getCells();
    this.weekdays = getWeekdays(this.date, this.locale);
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
    if (!this.store) {
      return;
    }
    this.store.update(date);
    this.cells = this.store.getCells();
  }

  validate(value) {
    this.initDate();
    const { locale, invaliddatetext, allowedyears } = this;
    const validDate = parseLocalisedDateIfValid(locale, value);
    const validYear = date => allowedyears.indexOf(date.getFullYear()) > -1;
    this.error = null;
    if (validDate && validYear(validDate)) {
      this.date = validDate;
      this.updateDatepickerProps(validDate);
      this.outputdate = validDate.toLocaleString(locale, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      });
    } else if (value && invaliddatetext) {
      this.error = invaliddatetext;
    }
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
    const { onChange = () => {}, input, state } = this;
    onChange(e);
    if (state.isControlled) {
      const { value: stateValue } = state;
      input.value = stateValue;
    }
  }

  handleBlur() {
    this.validate(this.input.value);
  }

  handleButtonOkClick() {
    const {
      locale,
      date,
      inputfield,
      input,
      onChange,
      state: { isControlled, value: stateValue },
    } = this;
    const value = date.toLocaleString(locale, {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });
    this.outputdate = value;
    onChange({ target: { value } });
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
    this.date = new Date(date);
    this.updateDatepickerProps(this.date);

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
