import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import styles from './index.scss';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

var AXAHeader = function (_BaseComponentGlobal) {
  _inherits(AXAHeader, _BaseComponentGlobal);

  function AXAHeader() {
    _classCallCheck(this, AXAHeader);

    var _this = _possibleConstructorReturn(this, (AXAHeader.__proto__ || _Object$getPrototypeOf(AXAHeader)).call(this, styles));

    _this.enableContext();
    return _this;
  }

  _createClass(AXAHeader, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAHeader.prototype.__proto__ || _Object$getPrototypeOf(AXAHeader.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' o-header';
    }
  }]);

  return AXAHeader;
}(BaseComponentGlobal);

AXAHeader.tagName = 'axa-header';


wcdomready(function () {
  window.customElements.define(AXAHeader.tagName, AXAHeader);
});

export default AXAHeader;