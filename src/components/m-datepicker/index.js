import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import { TODAY } from '../../js/date';
import localePropType from '../../js/prop-types/locale-prop-type';
import styles from './index.scss';
import template from './_template';
import Datepicker from './js/datepicker';

const startType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.oneOf([TODAY]),
]);

class AXAMDatepicker extends BaseComponentGlobal {
  static tagName = 'axa-m-datepicker'
  static propTypes = {
    classes: PropTypes.string,
    buttonOk: PropTypes.string,
    buttonCancel: PropTypes.string,
    locale: localePropType,
    value: PropTypes.string,
    startYear: startType,
    startMonth: startType, // zero-based
    selectedDay: PropTypes.number,
    lowerEndYear: PropTypes.number,
    higherEndYear: PropTypes.number,
  }

  // Specify observed attributes so that attributeChangedCallback will work,
  static get observedAttributes() {
    return [
      'button-ok',
      'button-cancel',
      'locale',
      'value',
      'start-year',
      'start-month',
      'selected-day',
      'lower-end-year',
      'higher-end-year',
    ];
  }

  init() {
    super.init({ styles, template });
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.initialClassName} m-datepicker`;
    this.datepicker = new Datepicker(this);
    this.datepicker.init();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.datepicker.destroy();
  }
}

defineOnce(AXAMDatepicker.tagName, AXAMDatepicker);

export default AXAMDatepicker;
