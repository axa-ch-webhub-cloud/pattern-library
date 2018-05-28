import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

var AXAHeaderMobileOthers = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeaderMobileOthers, _BaseComponentGlobal);
  babelHelpers.createClass(AXAHeaderMobileOthers, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['items'];
    }
  }]);

  function AXAHeaderMobileOthers() {
    babelHelpers.classCallCheck(this, AXAHeaderMobileOthers);
    return babelHelpers.possibleConstructorReturn(this, (AXAHeaderMobileOthers.__proto__ || Object.getPrototypeOf(AXAHeaderMobileOthers)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAHeaderMobileOthers, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAHeaderMobileOthers.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderMobileOthers.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-mobile-others';
    }
  }]);
  return AXAHeaderMobileOthers;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header-mobile-others', AXAHeaderMobileOthers);
});

export default AXAHeaderMobileOthers;