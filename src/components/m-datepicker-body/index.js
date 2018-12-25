import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import localePropType from '../../js/prop-types/locale-prop-type';
import getAttribute from '../../js/get-attribute';
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
    cells: PropTypes.array
  }

  init() {
    super.init({ styles, template });
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
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

  get day() {
    return this.getAttribute('day');
  }

  set day(value) {
    this.setAttribute('day', value);
  }

  get month() {
    return this.getAttribute('month');
  }

  set month(value) {
    this.setAttribute('month', value);
  }

  set year(value) {
    this.setAttribute('year', value);
  }

  get year() {
    return this.getAttribute('year');
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

  // attributeChangedCallback(name, oldValue, newValue) {
  //   super.attributeChangedCallback(name, oldValue, newValue);
  //   // this.props.cells = this.store.getCells();
  //   // if ((name === 'month' || name === 'year') && this.shouldUpdateCallback(newValue, oldValue) && newValue !== null && oldValue !== null) {
  //   //   fire(this, AXA_EVENTS.AXA_CHANGE, null, { bubbles: true, cancelable: true, composed: true });
  //   // }
  // }
}

defineOnce(AXADatepickerBody.tagName, AXADatepickerBody);

export default AXADatepickerBody;
