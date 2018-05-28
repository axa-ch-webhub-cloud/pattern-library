import styles from './index.scss';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

var AXAHeader = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeader, _BaseComponentGlobal);

  function AXAHeader() {
    babelHelpers.classCallCheck(this, AXAHeader);

    var _this = babelHelpers.possibleConstructorReturn(this, (AXAHeader.__proto__ || Object.getPrototypeOf(AXAHeader)).call(this, styles));

    _this.enableContext();
    return _this;
  }

  babelHelpers.createClass(AXAHeader, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAHeader.prototype.__proto__ || Object.getPrototypeOf(AXAHeader.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' o-header';
    }
  }]);
  return AXAHeader;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header', AXAHeader);
});

export default AXAHeader;