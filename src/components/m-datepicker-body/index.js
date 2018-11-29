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
  }

  init() {
    super.init({ styles, template });
    this.datepickerBody = new DatepickerBody(this);
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.initialClassName} m-datepicker-body`;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // TODO Don't forget to cleanup :)
  }

  willRenderCallback() {
    // @todo: `getAttribute` should be replaced by `this.props.*`
    let month = getAttribute(this, 'month');
    month = (month || month === 0) ? month : undefined;
    let day = getAttribute(this, 'day');
    day = (day || day === 0) ? day : undefined;
    const index = getAttribute(this, 'index');
    const locale = getAttribute(this, 'locale');
    const year = getAttribute(this, 'year') || undefined;
    const allowedYears = getAttribute(this, 'allowed-years');

    this.datepickerBody.init(index, locale, year, month, day, allowedYears);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if ((name === 'month' || name === 'year') && this.shouldUpdateCallback(newValue, oldValue) && newValue !== null && oldValue !== null) {
      fire(this, AXA_EVENTS.AXA_CHANGE, null, { bubbles: true, cancelable: true, composed: true });
    }
  }
}

defineOnce(AXADatepickerBody.tagName, AXADatepickerBody);

export default AXADatepickerBody;
