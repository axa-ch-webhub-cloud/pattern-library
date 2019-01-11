import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import localePropType from '../../js/prop-types/locale-prop-type';
import { parseLocalisedDateIfValid } from '../../js/date';
import styles from './index.scss';
import template from './_template';
import on from '../../js/on';
import { AXA_EVENTS, EVENTS } from '../../js/ui-events';

class AXADatepicker extends BaseComponentGlobal {
  static tagName = 'axa-datepicker'

  static propTypes = {
    classes: PropTypes.string,
    locale: localePropType,
    open: PropTypes.bool,
    value: PropTypes.string,
    outputValue: PropTypes.string,

    buttonCancel: PropTypes.string,
    buttonOk: PropTypes.string,

    startDateYear: PropTypes.number,
    startDateMonth: PropTypes.number,
    startDateDay: PropTypes.number,
    allowedYears: PropTypes.arrayOf(PropTypes.number),
    lowerEndYear: PropTypes.number,
    higherEndYear: PropTypes.number,
  }

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();
    this.body = document.body;
    this.datepickerCalendar = this.querySelector('.js-datepicker__calendar');
    this.datepickerBody = this.querySelector('.js-datepicker__datepicker-body');
    this.datepickerInput = this.querySelector('.js-datepicker__input');

    // Register Events
    this.body.addEventListener(EVENTS.CLICK, e => this.handleBodyClick(e));
    this.offDatepickerCalendarClick = on(this, EVENTS.CLICK, 'js-datepicker__calendar', e => this.handleDatepickerCalendarClick(e));
    this.offDatePickerInputClick = on(this, EVENTS.CLICK, 'js-input__input', e => this.handleDatepickerInputClick(e));
    this.offDatePickerInputButtonClick = on(this, EVENTS.CLICK, 'js-input__icon-button', e => this.handleDatepickerInputButtonClick(e));
    this.offDatePickerInputChange = on(
      this.datepickerInput, AXA_EVENTS.AXA_CHANGE, '',
      this.handleDatepickerInputChange, { capture: true, passive: false },
    );
    // Listen to fired events of sub component datepicker calendar
    this.offDatepickerCalendarDateChanged = on(this.datepickerCalendar, 'date-changed', e => this.handleDatepickerChangeDate(e));
    this.offDatepickerCalendarCancel = on(this.datepickerCalendar, 'cancel', e => this.handleDatepickerCancel(e));
    
    if (this.datepickerCalendar && this.isItemInLowerHalf(this.datepickerInput)) {
      this.datepickerCalendar.classList.add('o-datepicker__calendar--move-up');
    }
  }

  handleBodyClick = () => {
    if (this.open) {
      this.closeDatepicker();
    }
  }

  handleDatepickerInputClick = (e) => {
    e.stopPropagation(); // important as the propagation of the document.body event must be prevented
  }

  handleDatepickerInputButtonClick = (e) => {
    e.stopPropagation(); // important as the propagation of the document.body event must be prevented
    if (this.open) {
      this.closeDatepicker();
    } else {
      this.openDatepicker();
    }
  }

  handleDatepickerInputChange = (e) => {
    const validDate = parseLocalisedDateIfValid(this.locale, e.detail);
    if (validDate) {
      // this.updateDate(validDate); // .. coz double trigger
      this.updateDatepickerBody(validDate);
    }
  }

  handleDatepickerCalendarClick = (e) => {
    e.stopPropagation();
  }

  handleDatepickerCancel = () => {
    this.closeDatepicker();
  }

  // TODO:: loses focus and day is not accurate
  handleDatepickerChangeDate = (e) => {
    console.log('date chanchaged', e);

    if (e.detail.value !== '') {
      this.updateDate(e.detail.value);
      this.closeDatepicker();
    }
  }

  updateDate(date) {
    this.value = this.toLocalISOString(date);
    this.outputValue = date.toLocaleString(this.locale, { day: 'numeric', month: 'numeric', year: 'numeric' });
  }

  updateDatepickerBody(date) {
    this.datepickerBody.setAttribute('day', date.getDate());
    this.datepickerBody.setAttribute('value', date.getDate());
    this.datepickerBody.setAttribute('month', date.getMonth());
    this.datepickerBody.setAttribute('year', date.getFullYear());
  }

  // Respects current timezone of the date object we convert to "iso like format"
  toLocalISOString = (date) => {
    // ISO 8601
    const d = date;
    const pad = n => n < 10 ? `0${n}` : n;
    const tz = d.getTimezoneOffset(); // mins
    let tzs = (tz > 0 ? '-' : '+') + pad(parseInt(tz / 60, 10));

    if (tz % 60 !== 0) { tzs += pad(tz % 60); }
    if (tz === 0) { tzs = 'Z'; }

    return `${d.getFullYear()}-${
      pad(d.getMonth() + 1)}-${
      pad(d.getDate())}T${
      pad(d.getHours())}:${
      pad(d.getMinutes())}:${
      pad(d.getSeconds())}${tzs}`;
  }

  closeDatepicker() {
    this.open = false;
  }

  openDatepicker() {
    this.open = true;
  }

  isItemInLowerHalf = (target) => {
    if (!target) {
      return true;
    }
    const { top, height } = target.getBoundingClientRect();
    const calculation = top + (height / 2);
    const toBottom = window.innerHeight - calculation;
    const toTop = calculation;

    return toBottom < toTop;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Deregister Events
    this.body.removeEventListener(EVENTS.CLICK, e => this.handleBodyClick(e));
    this.offDatepickerCalendarClick();
    this.offDatePickerInputClick();
    this.offDatePickerInputButtonClick();
    this.offDatePickerInputChange();
    this.offDatepickerCalendarDateChanged();
    this.offDatepickerCalendarCancel();
  }

  set open(value) {
    const isOpen = Boolean(value);
    if (isOpen) { this.datepickerCalendar.removeAttribute('hidden'); } else { this.datepickerCalendar.setAttribute('hidden', ''); }
  }

  get open() {
    return !this.datepickerCalendar.hasAttribute('hidden');
  }

  set locale(value) {
    if (value) { this.setAttribute('locale', value); } else { this.removeAttribute('locale'); }
  }

  get locale() {
    return this.getAttribute('locale');
  }

  set value(value) {
    if (value) { this.setAttribute('value', value); } else { this.removeAttribute('value'); }
  }

  get value() {
    return this.getAttribute('value');
  }

  set outputValue(value) {
    if (value) { this.setAttribute('output-value', value); } else { this.removeAttribute('output-value'); }
  }

  get outputValue() {
    return this.getAttribute('output-value');
  }
}

defineOnce(AXADatepicker.tagName, AXADatepicker);

export default AXADatepicker;
