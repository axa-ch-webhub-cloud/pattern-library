import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

var AXAFooter = function (_BaseComponentGlobal) {
  _inherits(AXAFooter, _BaseComponentGlobal);

  function AXAFooter() {
    _classCallCheck(this, AXAFooter);

    return _possibleConstructorReturn(this, (AXAFooter.__proto__ || _Object$getPrototypeOf(AXAFooter)).apply(this, arguments));
  }

  _createClass(AXAFooter, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAFooter.prototype.__proto__ || _Object$getPrototypeOf(AXAFooter.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' o-footer';
    }
  }]);

  return AXAFooter;
}(BaseComponentGlobal);

AXAFooter.tagName = 'axa-footer';


wcdomready(function () {
  window.customElements.define(AXAFooter.tagName, AXAFooter);
});

export default AXAFooter;