import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import wcdomready from '../../js/wcdomready';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import template from './_template';
import styles from './index.scss';

var AXAAccordion = function (_BaseComponentGlobal) {
  _inherits(AXAAccordion, _BaseComponentGlobal);

  function AXAAccordion() {
    _classCallCheck(this, AXAAccordion);

    var _this = _possibleConstructorReturn(this, (AXAAccordion.__proto__ || _Object$getPrototypeOf(AXAAccordion)).call(this, styles, template));

    _this.enableContext();
    return _this;
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */


  _createClass(AXAAccordion, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAAccordion.prototype.__proto__ || _Object$getPrototypeOf(AXAAccordion.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' o-accordion js-accordion';
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      _get(AXAAccordion.prototype.__proto__ || _Object$getPrototypeOf(AXAAccordion.prototype), 'disconnectedCallback', this).call(this);
    }
  }]);

  return AXAAccordion;
}(BaseComponentGlobal);

AXAAccordion.tagName = 'axa-accordion';


wcdomready(function () {
  window.customElements.define(AXAAccordion.tagName, AXAAccordion);
});

export default AXAAccordion;