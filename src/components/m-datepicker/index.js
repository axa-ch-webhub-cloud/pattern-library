import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import { TODAY } from '../../js/date';
import localePropType from '../../js/prop-types/locale-prop-type';
import styles from './index.scss';
import template from './_template';
import Datepicker from './js/datepicker';
import getAttribute from '../../js/get-attribute';

const startType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.oneOf([TODAY]),
]);

class AXAMDatePicker extends BaseComponentGlobal {
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
    outputIso: PropTypes.bool,
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

  // You have some special logic? Or need to update the web-components DOM node itself?
  // Then don't forget to make sure that incremental rendering works properly.
  // attributeChangedCallback(name, oldValue, newValue) {
  //   super.attributeChangedCallback(name, oldValue, newValue);
  // }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.datepicker.destroy();
  }
}

defineOnce(AXAMDatePicker.tagName, AXAMDatePicker);

export default AXAMDatePicker;
