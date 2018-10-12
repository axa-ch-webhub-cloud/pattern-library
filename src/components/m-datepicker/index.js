import PropTypes from 'prop-types';

import BaseComponentGlobal from '../../js/abstract/base-component-global';
import defineOnce from '../../js/define-once';
import { TODAY } from '../../js/date';
import localePropType from '../../js/prop-types/locale-prop-type';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';

import Datepicker from './js/datepicker';

import getAttribute from '../../js/get-attribute';

const startType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.oneOf([TODAY]),
]);

class AXADatepicker extends BaseComponentGlobal {
  static tagName = 'axa-m-datepicker'
  static propTypes = {
    classes: PropTypes.string,
    buttonOk: PropTypes.string,
    buttonCancel: PropTypes.string,
    locale: localePropType,
    value: PropTypes.string,
    startYear: startType,
    startMonth: startType,
    selectedDay: PropTypes.number,
    lowerEndYear: PropTypes.number,
    higherEndYear: PropTypes.number,
    outputIso: PropTypes.string,
  }

  // Specify observed attributes so that attributeChangedCallback will work,
  // this is essential for external re-rendering trigger.
  static get observedAttributes() {
    return ['classes', 'button-ok', 'button-cancel', 'locale', 'value', 'start-year', 'start-month', 'selected-day', 'lower-end-year', 'higher-end-year', 'output-iso'];
  }

  constructor() {
    super({ styles, template });

    this.datepicker = new Datepicker(this);
    // does this provide context (See docs for context) ?
    // this.enableContext()

    // or do you want to consume a specific context
    // this.selectContext('axa-context-provider');
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */
  connectedCallback() {
    super.connectedCallback();

    this.className = `${this.initialClassName} m-datepicker`;
    // Your DOM interaction here, but keep it decoupled.
    // If you don't have any, just remove this function
  }

  // You have some special logic? Or need to update the web-components DOM node itself?
  // Then don't forget to make sure that incremental rendering works properly.
  // attributeChangedCallback(name, oldValue, newValue) {
  //   super.attributeChangedCallback(name, oldValue, newValue);
  // }

  // You may want to update stuff before rendering.
  // willRenderCallback(initial) {
  // }

  // You may want to update staff after rendering
  // didRenderCallback(initial) {
  // }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.datepicker.destroy();
  }
  // Do you consume context?
  // contextCallback(contextNode) {
  //   contextNode is now available.
  // }
  didRenderCallback() {
    // TODO see if it has to be today and if so pass here value
    this.datepicker.init(getAttribute(this, 'output-iso'));
  }
}

defineOnce(AXADatepicker.tagName, AXADatepicker);

export default AXADatepicker;
