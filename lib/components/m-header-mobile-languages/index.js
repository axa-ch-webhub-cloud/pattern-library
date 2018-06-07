import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAHeaderMobileLanguages = function (_BaseComponentGlobal) {
  _inherits(AXAHeaderMobileLanguages, _BaseComponentGlobal);

  _createClass(AXAHeaderMobileLanguages, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['items'];
    }
  }]);

  function AXAHeaderMobileLanguages() {
    _classCallCheck(this, AXAHeaderMobileLanguages);

    return _possibleConstructorReturn(this, (AXAHeaderMobileLanguages.__proto__ || _Object$getPrototypeOf(AXAHeaderMobileLanguages)).call(this, { styles: styles, template: template }));
  }

  _createClass(AXAHeaderMobileLanguages, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAHeaderMobileLanguages.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderMobileLanguages.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-mobile-languages';
    }
  }]);

  return AXAHeaderMobileLanguages;
}(BaseComponentGlobal);

AXAHeaderMobileLanguages.tagName = 'axa-header-mobile-languages';


wcdomready(function () {
  window.customElements.define(AXAHeaderMobileLanguages.tagName, AXAHeaderMobileLanguages);
});

export default AXAHeaderMobileLanguages;