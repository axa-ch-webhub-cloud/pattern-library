import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import localePropType from '../../js/prop-types/locale-prop-type';
import styles from './index.scss';
import template from './_template';
import DatepickerBody from './js/datepicker-body';
import fire from '../../js/fire';
import { AXA_EVENTS } from '../../js/ui-events';
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
    allowedYears: PropTypes.arrayOf(PropTypes.number),
    cells: PropTypes.arrayOf(PropTypes.object),
  }

  init() {
    super.init({ styles, template });
  }

  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.initialClassName} m-datepicker-body`;
    this.store = new Store(this.locale, new Date(this.year, this.month, this.day));
    this.datepickerBody = new DatepickerBody(this);
    this.datepickerBody.init(this.index, this.locale, this.year, this.month, this.day, this.allowedYears, this.store);

    // Set Cells
    this.props.cells = this.store.cells;
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
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    const newDate = new Date(this.date);
    let isNewDate = false;

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
