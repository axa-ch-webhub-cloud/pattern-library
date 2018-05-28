import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAHeaderMobileLanguages = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeaderMobileLanguages, _BaseComponentGlobal);
  babelHelpers.createClass(AXAHeaderMobileLanguages, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['items'];
    }
  }]);

  function AXAHeaderMobileLanguages() {
    babelHelpers.classCallCheck(this, AXAHeaderMobileLanguages);
    return babelHelpers.possibleConstructorReturn(this, (AXAHeaderMobileLanguages.__proto__ || Object.getPrototypeOf(AXAHeaderMobileLanguages)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAHeaderMobileLanguages, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAHeaderMobileLanguages.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderMobileLanguages.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-mobile-languages';
    }
  }]);
  return AXAHeaderMobileLanguages;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header-mobile-languages', AXAHeaderMobileLanguages);
});

export default AXAHeaderMobileLanguages;