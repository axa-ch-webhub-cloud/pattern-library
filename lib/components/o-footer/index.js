import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

var AXAFooter = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAFooter, _BaseComponentGlobal);

  function AXAFooter() {
    babelHelpers.classCallCheck(this, AXAFooter);
    return babelHelpers.possibleConstructorReturn(this, (AXAFooter.__proto__ || Object.getPrototypeOf(AXAFooter)).apply(this, arguments));
  }

  babelHelpers.createClass(AXAFooter, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAFooter.prototype.__proto__ || Object.getPrototypeOf(AXAFooter.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' o-footer';
    }
  }]);
  return AXAFooter;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-footer', AXAFooter);
});

export default AXAFooter;