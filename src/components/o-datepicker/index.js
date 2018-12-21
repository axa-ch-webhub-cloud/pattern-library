import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import localePropType from '../../js/prop-types/locale-prop-type';
import { getLocaleDayMonthYear } from '../../js/date';
import styles from './index.scss';
import template from './_template';
import on from '../../js/on';
import { EVENTS } from '../../js/ui-events';

class AXADatepicker extends BaseComponentGlobal {
  static tagName = 'axa-datepicker'
  
  static propTypes = {
    classes: PropTypes.string,
    locale: localePropType,
    open: PropTypes.bool,
    lowerEndYear: PropTypes.number,
    buttonCancel: PropTypes.string,
    buttonOk: PropTypes.string,
    higherEndYear: PropTypes.number,
    value: PropTypes.string,
    outputValue: PropTypes.string,
  }

  init() {
    super.init({ styles, template });
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();
    this.datepickerCalendar = this.querySelector('.js-datepicker__calendar');
    this.datepickerInput = this.querySelector('.js-datepicker__input');
    this.datepickerInput.addEventListener(EVENTS.CLICK, (e) => this.handleDatepickerInputClick(e));
    this.datepickerInput.addEventListener(EVENTS.CHANGE, (e) => this.handleDatepickerInputChange(e));
    
    // Register Events
    document.body.addEventListener('click', (e) => this.handleBodyClick(e));
    this.datepickerCalendarDateChanged = on(this.datepickerCalendar, 'date-changed', (e) => this.handleDatepickerChangeDate(e));
    this.datepickerCalendarCancel = on(this.datepickerCalendar, 'cancel', (e) => this.handleDatepickerCancel(e));

    if (this.datepickerCalendar && this.isItemInLowerHalf(this.datepickerInput)) {
      this.datepickerCalendar.classList.add('o-datepicker__calendar--move-up');
    }
  }

  handleBodyClick = (e) => {
    if(this.open) {
      this.closeDatepicker();
    }
  }

  handleDatepickerInputClick = (e) => {
    e.stopPropagation(); // important as the propagation of the document.body event must be prevented
    if(this.open) {
      this.closeDatepicker();
    } else {
      this.openDatepicker();
    }
  }

  handleDatepickerInputChange = (e) => {
    console.log('input change');
  }

  handleDatepickerCancel = (e) => {
    this.closeDatepicker();
  }

  handleDatepickerChangeDate = (e) => {
    if (e.detail.value !== '') {
      this.outputValue = getLocaleDayMonthYear(this.locale, e.detail.value);
      this.value = e.detail.value.toISOString();
      this.closeDatepicker();
    }
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

    this.datepickerCalendarCancel();
    this.datepickerCalendarDateChanged();
    document.body.removeEventListener('click', (e) => this.handleBodyClick(e));
  }

  set open(value) {
    const isOpen = Boolean(value);
    if (isOpen)
      this.datepickerCalendar.removeAttribute('hidden');
    else
      this.datepickerCalendar.setAttribute('hidden', '');
  }

  get open() {
    return !this.datepickerCalendar.hasAttribute('hidden');
  }

  set locale(value) {
    if (value)
      this.setAttribute('locale', value);
    else
      this.removeAttribute('locale');
  }

  get locale() {
    return this.getAttribute('locale');
  }

  set value(value) {
    if (value)
      this.setAttribute('value', value);
    else
      this.removeAttribute('value');
  }

  get value() {
    return this.getAttribute('value');
  }

  set outputValue(value) {
    if (value)
      this.setAttribute('output-value', value);
    else
      this.removeAttribute('output-value');
  }

  get outputValue() {
    return this.getAttribute('output-value');
  }
}

defineOnce(AXADatepicker.tagName, AXADatepicker);

export default AXADatepicker;
