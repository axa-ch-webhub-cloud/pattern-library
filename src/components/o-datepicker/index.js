import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import localePropType from '../../js/prop-types/locale-prop-type';
import { parseLocalisedDateIfValid, toLocalISOString } from '../../js/date';
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

  static get observedAttributes() {
    return [
      'locale',
      'output-value',
      'allowed-years',
      'start-date-year',
      'start-date-month',
      'start-date-day'];
  }

  init() {
    super.init({ styles, template });
    this.className = `o-datepicker${this.initialClassName ? ` ${this.initialClassName}` : ''}`;
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
    this.onInputFieldRender = on(this.datepickerInput, AXA_EVENTS.AXA_RENDER, e => this.handleInputFieldRendered(e));

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

  // This is hacky. We wait for the fired didRenderCallback of the children input field and set the focus manually as it is lost coz of rerendering
  handleInputFieldRendered(e) {
    if (e.detail) {
      e.detail.focus();
      e.detail.setSelectionRange(e.detail.value.length, e.detail.value.length);
    }
  }

  handleDatepickerInputChange = (e) => {
    if (e.detail.length === 10) {
      const validDate = parseLocalisedDateIfValid(this.locale, e.detail);
      if (validDate) {
        this.updateDate(validDate);
        this.updateDatepickerBody(validDate);
      }
    }
  }

  handleDatepickerCalendarClick = (e) => {
    e.stopPropagation();
  }

  handleDatepickerCancel = () => {
    this.closeDatepicker();
  }

  // TODO: Apply validation. Check for allowed years
  handleDatepickerChangeDate = (e) => {
    // console.log('date changed', e.detail.value);
    if (e.detail.value !== '') {
      this.valueChanged = true;
      this.updateDate(e.detail.value);
      this.updateDatepickerBody(e.detail.value.toISOString());
      this.closeDatepicker();
    }
  }

  updateDate(date) {
    this.value = toLocalISOString(date); // We should probably use the normal iso.
    this.outputValue = date.toLocaleString(this.locale, { day: 'numeric', month: 'numeric', year: 'numeric' });
  }

  updateDatepickerBody(date) {
    this.datepickerBody.setAttribute('value', new Date(Date.parse(date)).toISOString());
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
    this.onDropdownClick();
    this.onDropdownValueChange();
    this.onDropdownValueClick();
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
    this.setAttribute('output-value', value);
  }

  get outputValue() {
    return this.getAttribute('output-value');
  }

  get allowedYears() {
    return this.getAttribute('allowed-years');
  }

  set allowedYears(value) {
    this.setAttribute('allowed-years', value);
  }
}

defineOnce(AXADatepicker.tagName, AXADatepicker);

export default AXADatepicker;
