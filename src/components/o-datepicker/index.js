import PropTypes from '../../js/prop-types'; // eslint-disable-next-line import/first

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import localePropType from '../../js/prop-types/locale-prop-type';
import styles from './index.scss';
import template from './_template';
import Datepicker from './js/datepicker';
import fire from '../../js/fire';
import { AXA_EVENTS } from '../../js/ui-events';

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
  }

  init() {
    super.init({ styles, template });
    this.datepicker = new Datepicker(this); // TODO:: move to connectedCallback to prevent multi inits
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();
    this.className = `${this.initialClassName} o-datepicker`;
    this.datepicker.init();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.datepicker.destroy();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    if (name === 'open' && this.shouldUpdateCallback(newValue, oldValue) && newValue !== null) {
    // option 1
    // fire(this, AXA_EVENTS.AXA_CHANGE, '', { bubbles: true, cancelable: true, composed: true });
    // option 2
    // this.datepicker.onCalenderStatusChange();
    }
  }
}

defineOnce(AXADatepicker.tagName, AXADatepicker);

export default AXADatepicker;
