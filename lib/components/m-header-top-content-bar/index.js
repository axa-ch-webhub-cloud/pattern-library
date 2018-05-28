import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

var AXATopContentBar = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXATopContentBar, _BaseComponentGlobal);
  babelHelpers.createClass(AXATopContentBar, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['type'];
    }
  }]);

  function AXATopContentBar() {
    babelHelpers.classCallCheck(this, AXATopContentBar);
    return babelHelpers.possibleConstructorReturn(this, (AXATopContentBar.__proto__ || Object.getPrototypeOf(AXATopContentBar)).call(this, styles, template));
  }

  babelHelpers.createClass(AXATopContentBar, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var type = this.type;


      this.className = this.initialClassName + ' m-header-top-content-bar m-header-top-content-bar--' + type;
    }
  }]);
  return AXATopContentBar;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header-top-content-bar', AXATopContentBar);
});

export default AXATopContentBar;