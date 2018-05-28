import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';
import HeaderLogo from './js/header-logo';

var AXAHeaderLogo = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeaderLogo, _BaseComponentGlobal);
  babelHelpers.createClass(AXAHeaderLogo, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['alt', 'href', 'src'];
    }
  }]);

  function AXAHeaderLogo() {
    babelHelpers.classCallCheck(this, AXAHeaderLogo);
    return babelHelpers.possibleConstructorReturn(this, (AXAHeaderLogo.__proto__ || Object.getPrototypeOf(AXAHeaderLogo)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAHeaderLogo, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAHeaderLogo.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderLogo.prototype), 'connectedCallback', this).call(this);

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

wcdomready(function () {
  window.customElements.define('axa-header-logo', AXAHeaderLogo);
});

export default AXAHeaderLogo;