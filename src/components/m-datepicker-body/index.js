import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import localePropType from '../../js/prop-types/locale-prop-type';
import styles from './index.scss';
import template from './_template';
import fire from '../../js/fire';
import on from '../../js/on';
import { EVENTS, AXA_EVENTS } from '../../js/ui-events';
import Store from './js/store';

class AXADatepickerBody extends BaseComponentGlobal {
  static tagName = 'axa-datepicker-body'
  static propTypes = {
    classes: PropTypes.string,
    locale: localePropType,
    value: PropTypes.string,
    index: PropTypes.number,
    allowedYears: PropTypes.arrayOf(PropTypes.number),
    year: PropTypes.number,
    month: PropTypes.number,
    day: PropTypes.number,
    date: PropTypes.string,
    cells: PropTypes.arrayOf(PropTypes.object),
  }

  static get observedAttributes() {
    return ['day', 'month', 'year', 'cells', 'value', 'index', 'date', 'allowed-years'];
  }

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.classes ? this.classes : ''} m-datepicker-body`;

    const date = new Date(this.props.year, this.props.month - 1, this.props.day);
    this.store = new Store(this.locale, date);

    this.onDatepickerBodyCellClick = on(
      this, EVENTS.CLICK, 'js-datepicker__calender-body__cell',
      e => this.handleDatepickerBodyCellClick(e), { capture: true, passive: false },
    );
    // Set Cells
    this.props.cells = this.store.cells;
  }

  didRenderCallback() {
    // this is not working in connectedCallback...
    const date = new Date(this.props.year, this.props.month - 1, this.props.day);
    if (!this.getAttribute('date')) {
      this.setAttribute('date', date.toISOString());
    }
  }

  handleDatepickerBodyCellClick(e) {
    e.preventDefault();
    const index = parseInt(e.target.dataset.index, 10);

    // We parse the iso date to work with
    const date = new Date(Date.parse(e.target.dataset.value));
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.day = date.getDate();
    this.index = index;

    // Set the day to the chosen day
    this.date = date.toISOString();
  }

  get index() {
    return this.getAttribute('index');
  }

  set index(value) {
    this.setAttribute('index', value);
  }

  get locale() {
    return this.getAttribute('locale');
  }

  set locale(value) {
    this.setAttribute('locale', value);
  }

  get date() {
    return this.getAttribute('date');
  }

  set date(value) {
    this.setAttribute('date', value);
  }

  set year(value) {
    this.setAttribute('year', value);
  }

  get year() {
    return this.getAttribute('year');
  }

  get month() {
    return this.getAttribute('month');
  }

  set month(value) {
    this.setAttribute('month', value);
  }

  get day() {
    return this.getAttribute('day');
  }

  set day(value) {
    this.setAttribute('day', value);
  }

  set allowedYears(value) {
    this.setAttribute('allowed-years', value);
  }

  get allowedYears() {
    let out = '';
    try {
      out = JSON.parse(this.getAttribute('allowed-years'));
    } catch (e) {
      out = '';
    }
    return out;
  }

  set classes(value) {
    this.setAttribute('classes', value);
  }

  get classes() {
    return this.getAttribute('classes');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.onDatepickerBodyCellClick();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === 'date' && this.store && this.date) {
      const newDate = new Date(Date.parse(newValue));
      // Validation
      if (newDate.getFullYear() < this.allowedYears[0] ||
        newDate.getFullYear() > this.allowedYears[this.allowedYears.length - 1]) {
        fire(
          this, AXA_EVENTS.AXA_VALIDATION, { type: 'error', message: 'not-in-range' },
          { bubbles: true, cancelable: true, composed: true },
        );
        return;
      }

      this.store.update(newDate);
      this.props.cells = this.store.getCells();
      fire(this, AXA_EVENTS.AXA_CHANGE, newDate, { bubbles: true, cancelable: true, composed: true });
      fire(this, AXA_EVENTS.AXA_VALIDATION, { type: 'success', message: 'valid' }, { bubbles: true, cancelable: true, composed: true });
    }
  }
}

defineOnce(AXADatepickerBody.tagName, AXADatepickerBody);

export default AXADatepickerBody;
