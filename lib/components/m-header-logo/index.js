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
import HeaderLogo from './js/header-logo';

var AXAHeaderLogo = function (_BaseComponentGlobal) {
  _inherits(AXAHeaderLogo, _BaseComponentGlobal);

  _createClass(AXAHeaderLogo, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['alt', 'href', 'src'];
    }
  }]);

  function AXAHeaderLogo() {
    _classCallCheck(this, AXAHeaderLogo);

    return _possibleConstructorReturn(this, (AXAHeaderLogo.__proto__ || _Object$getPrototypeOf(AXAHeaderLogo)).call(this, { styles: styles, template: template }));
  }

  _createClass(AXAHeaderLogo, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAHeaderLogo.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderLogo.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-logo';
    }
  }, {
    key: 'didRenderCallback',
    value: function didRenderCallback() {
      if (this.logo) {
        this.logo.destroy();
      }

      this.logo = new HeaderLogo(this);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (this.logo) {
        this.logo.destroy();
        delete this.logo;
      }
    }
  }]);

  return AXAHeaderLogo;
}(BaseComponentGlobal);

AXAHeaderLogo.tagName = 'axa-header-logo';


wcdomready(function () {
  window.customElements.define(AXAHeaderLogo.tagName, AXAHeaderLogo);
});

export default AXAHeaderLogo;