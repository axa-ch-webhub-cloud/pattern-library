import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import localePropType from '../../js/prop-types/locale-prop-type';
import { parseLocalisedDateIfValid } from '../../js/date';
import styles from './index.scss';
import template from './_template';
import on from '../../js/on';
import { AXA_EVENTS, EVENTS } from '../../js/ui-events';
import debounce from '../../js/debounce';

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
      'classes',
      'open',
      'locale',
      'output-value',
      'allowed-years',
      'start-date-year',
      'start-date-month',
      'start-date-day',
    ];
  }

  init() {
    super.init({ styles, template });
    this.className = `o-datepicker${this.classes ? ` ${this.classes}` : ''}`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.body = document.body;

    // Register Events
    this.body.addEventListener(EVENTS.CLICK, e => this.handleBodyClick(e));
    window.addEventListener('keydown', e => this.handleWindowKeyDown(e));

    this.onDatepickerCalendarClick = on(this, EVENTS.CLICK, 'js-datepicker__calendar', e => this.handleDatepickerCalendarClick(e));
    this.onDatePickerInputClick = on(this, EVENTS.CLICK, 'js-input__input', e => this.handleDatepickerInputClick(e));
    this.onDatePickerInputButtonClick = on(this, EVENTS.CLICK, 'js-input__icon-button', e => this.handleDatepickerInputButtonClick(e));

    this.onDatePickerInputChange = on(
      this.datepickerInput, AXA_EVENTS.AXA_CHANGE, '',
      e => this.handleDatepickerInputChange(e), { capture: true, passive: false },
    );

    // Listen to fired events of sub component datepicker calendar
    this.onDatepickerCalendarDateChanged = on(this, 'date-changed', 'js-datepicker__calendar', e => this.handleDatepickerChangeDate(e));
    this.onDatepickerCalendarCancel = on(this, 'cancel', 'js-datepicker__calendar', e => this.handleDatepickerCancel(e));
    this.onInputFieldRender = on(this, AXA_EVENTS.AXA_RENDER, 'js-datepicker__input', e => this.handleInputFieldRendered(e));
    this.onDatepickerBodyValidation =
     on(this, AXA_EVENTS.AXA_VALIDATION, 'js-datepicker__datepicker-body', e => this.handleDatepickerBodyValidation(e));

    // Adapt calendar position (window is too small in the height)
    if (this.datepickerCalendar) {
      window.addEventListener('resize', debounce(() => this.handleViewportCheck(this.querySelector('.js-datepicker__calendar')), 250));
    }
  }

  handleWindowKeyDown(e) {
    if ((e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27)) {
      e.preventDefault();
      if (this.open) {
        this.closeDatepicker();
      }
    }
  }

  handleViewportCheck(elem) {
    if (this.shouldMove(elem)) {
      this.classList.add('o-datepicker__calendar--move-up');
    }
  }

  handleBodyClick() {
    if (this.open) {
      this.closeDatepicker();
    }
  }

  handleDatepickerInputClick(e) {
    e.stopPropagation(); // important as the propagation of the document.body event must be prevented
  }

  handleDatepickerInputButtonClick(e) {
    e.stopPropagation(); // important as the propagation of the document.body event must be prevented
    if (this.open) {
      this.closeDatepicker();
    } else {
      this.openDatepicker();
    }
  }

  handleDatepickerBodyValidation(e) {
    if (e.detail.type === 'error') {
      this.classList.add('o-datepicker--is-invalid');
    } else {
      this.classList.remove('o-datepicker--is-invalid');
    }
  }

  // This is hacky. We wait for the fired didRenderCallback of the children input field and set the focus manually as it is lost coz of rerendering
  handleInputFieldRendered(e) {
    if (e.detail) {
      e.detail.focus();
      e.detail.setSelectionRange(e.detail.value.length, e.detail.value.length);
    }
  }

  handleDatepickerInputChange(e) {
    if (e.detail.length > 8) {
      const validDate = parseLocalisedDateIfValid(this.locale, e.detail);
      if (validDate) {
        this.updateDate(validDate);
        this.updateDatepickerBody(validDate.toISOString());
      }
    }
  }

  handleDatepickerCalendarClick(e) {
    e.stopPropagation();
  }

  handleDatepickerCancel() {
    this.closeDatepicker();
  }

  // TODO: Apply validation. Check for allowed years
  handleDatepickerChangeDate(e) {
    if (e.detail.value !== '') {
      this.valueChanged = true;
      this.updateDate(e.detail.value);
      this.updateDatepickerBody(e.detail.value.toISOString());
      this.closeDatepicker();
    }
  }

  updateDate(date) {
    this.value = date.toISOString();
    this.outputValue = date.toLocaleString(this.locale, { day: 'numeric', month: 'numeric', year: 'numeric' });
  }

  updateDatepickerBody(date) {
    if (this.datepickerBody) { // Needed for IE11...
      this.datepickerBody.date = date;
    }
  }

  closeDatepicker() {
    this.open = false;
    window.datepicker = null;
  }

  openDatepicker() {
    this.open = true;
    if (window.datepicker) {
      window.datepicker.closeDatepicker();
    }
    window.datepicker = this;
  }

  shouldMove(elem) {
    const bounding = elem.getBoundingClientRect();
    const bottomIsInViewport = bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight);
    const enoughSpaceToMove = bounding.top > bounding.height;
    return (!bottomIsInViewport && enoughSpaceToMove);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.onDropdownClick();
    this.onDropdownValueChange();
    this.onDropdownValueClick();
    // Deregister Events
    this.body.removeEventListener(EVENTS.CLICK, e => this.handleBodyClick(e));
    this.onDatepickerCalendarClick();
    this.onDatePickerInputClick();
    this.onDatePickerInputButtonClick();
    this.onDatePickerInputChange();
    this.onDatepickerCalendarDateChanged();
    this.onDatepickerCalendarCancel();
    window.removeEventListener('resize', () => this.handleViewportCheck());
    window.removeEventListener('keydown', e => this.handleKeyDown(e));
  }

  set classes(value) {
    if (value) { this.setAttribute('classes', value); } else { this.removeAttribute('classes'); }
  }

  get classes() {
    return this.getAttribute('classes');
  }

  set open(value) {
    if (value) { this.setAttribute('open', value); } else { this.removeAttribute('open'); }
  }

  get open() {
    return this.getAttribute('open');
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
