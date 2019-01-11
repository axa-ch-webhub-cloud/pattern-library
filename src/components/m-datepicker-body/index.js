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
import { LastMonth, NextMonth } from './js/cells';

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
    cells: PropTypes.arrayOf(PropTypes.object),
  }

  static get observedAttributes() {
    return ['day', 'month', 'year', 'cells', 'value', 'index'];
  }

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.initialClassName} m-datepicker-body`;
    this.date = new Date(this.props.year, this.props.month - 1, this.props.day);
    this.selected = this.date;
    this.store = new Store(this.locale, this.date);

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
    const cell = this.store.getCell(index);
    this.date = new Date();
    this.date.setFullYear(this.year);

    // Check if we click on a "grey" cell of an prev or next month
    if (cell instanceof NextMonth) {
      this.date.setMonth(this.month + 1);
      this.month = this.date.getMonth();
    }

    if (cell instanceof LastMonth) {
      this.date.setMonth(this.month - 1);
      this.month = this.date.getMonth();
    }

    this.date.setDate(parseInt(cell.text, 10)); // TODO:: save value in data-value than taking the text inner html field.
    this.day = this.date.getDate();
    this.index = index;

    console.log('handleDatepickerBodyCellClick(). set date', this.date);

    // Set the day to the chosen day
    this.selected = this.date;
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

    console.log('attributed changed', newValue);

    if (name === 'day') {
      isNewDate = true;
      newDate.setDate(parseInt(newValue, 10));
      if (this.store) {
        this.store.update(newDate);
        this.props.cells = this.store.getCells();
      }
    }

    if (name === 'year') {
      isNewDate = true;
      newDate.setFullYear(parseInt(newValue, 10));
      if (this.store) {
        this.store.update(newDate);
        this.props.cells = this.store.getCells();
      }
    }

    if (name === 'month') {
      isNewDate = true;
      newDate.setMonth(parseInt(newValue, 10));
      if (this.store) {
        // console.log('month update received', newDate);
        this.store.update(newDate);
        this.props.cells = this.store.getCells();
      }
    }

    if (isNewDate) {
      fire(this, AXA_EVENTS.AXA_CHANGE, newDate, { bubbles: true, cancelable: true, composed: true });
    }
  }
}

defineOnce(AXADatepickerBody.tagName, AXADatepickerBody);

export default AXADatepickerBody;
