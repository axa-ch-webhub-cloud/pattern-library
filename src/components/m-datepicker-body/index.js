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
    year: PropTypes.number,
    month: PropTypes.number,
    day: PropTypes.number,
    date: PropTypes.string,
    cells: PropTypes.arrayOf(PropTypes.object),
  }

  static get observedAttributes() {
    return ['day', 'month', 'year', 'cells', 'value', 'index', 'date'];
  }

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.initialClassName} m-datepicker-body`;
    this.props.date = new Date(this.props.year, this.props.month - 1, this.props.day);
    this.selected = this.props.date;
    this.store = new Store(this.locale, this.props.date);

    this.onDatepickerBodyCellClick = on(
      this, EVENTS.CLICK, 'js-datepicker__calender-body__cell',
      this.handleDatepickerBodyCellClick.bind(this), { capture: true, passive: false },
    );

    // Set Cells
    this.props.cells = this.store.cells;
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
    this.selected = date;
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
    return this.getAttribute('allowed-years');
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.onDatepickerBodyCellClick();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    const newDate = new Date(this.date);
    let isNewDate = false;

    if (name === 'date') {
      const parsedDate = new Date(Date.parse(newValue));
      if (this.store) {
        this.store.update(parsedDate);
        this.props.cells = this.store.getCells();
        isNewDate = true;
      }
    }

    if (isNewDate) {
      fire(this, AXA_EVENTS.AXA_CHANGE, newDate, { bubbles: true, cancelable: true, composed: true });
    }
  }
}

defineOnce(AXADatepickerBody.tagName, AXADatepickerBody);

export default AXADatepickerBody;
