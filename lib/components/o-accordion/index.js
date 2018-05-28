import wcdomready from '../../js/wcdomready';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import template from './_template';
import styles from './index.scss';

var AXAAccordion = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAAccordion, _BaseComponentGlobal);

  function AXAAccordion() {
    babelHelpers.classCallCheck(this, AXAAccordion);

    var _this = babelHelpers.possibleConstructorReturn(this, (AXAAccordion.__proto__ || Object.getPrototypeOf(AXAAccordion)).call(this, styles, template));

    _this.enableContext();
    return _this;
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */


  babelHelpers.createClass(AXAAccordion, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAAccordion.prototype.__proto__ || Object.getPrototypeOf(AXAAccordion.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' o-accordion js-accordion';
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      babelHelpers.get(AXAAccordion.prototype.__proto__ || Object.getPrototypeOf(AXAAccordion.prototype), 'disconnectedCallback', this).call(this);
    }
  }]);
  return AXAAccordion;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-accordion', AXAAccordion);
});

export default AXAAccordion;