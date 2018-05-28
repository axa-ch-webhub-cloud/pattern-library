import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';
import HeaderMobile from './js/header-mobile';

var AXAHeaderMobile = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeaderMobile, _BaseComponentGlobal);
  babelHelpers.createClass(AXAHeaderMobile, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['offcanvas'];
    }
  }]);

  function AXAHeaderMobile() {
    babelHelpers.classCallCheck(this, AXAHeaderMobile);

    var _this = babelHelpers.possibleConstructorReturn(this, (AXAHeaderMobile.__proto__ || Object.getPrototypeOf(AXAHeaderMobile)).call(this, styles, template));

    _this.selectContext('axa-header');
    return _this;
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */


  babelHelpers.createClass(AXAHeaderMobile, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAHeaderMobile.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderMobile.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-mobile';
    }
  }, {
    key: 'contextCallback',
    value: function contextCallback(contextNode) {
      if (this.interaction) {
        this.interaction.contextNode = contextNode;
      }
    }
  }, {
    key: 'didRenderCallback',
    value: function didRenderCallback() {
      if (this.interaction) {
        this.interaction.destroy();
      }

      this.interaction = new HeaderMobile(this);

      var contextNode = this.contextNode;


      if (contextNode) {
        this.contextCallback(contextNode);
      }
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      babelHelpers.get(AXAHeaderMobile.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderMobile.prototype), 'disconnectedCallback', this).call(this);

      if (this.interaction) {
        this.interaction.destroy();
        delete this.interaction;
      }
    }
  }]);
  return AXAHeaderMobile;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header-mobile', AXAHeaderMobile);
});

export default AXAHeaderMobile;