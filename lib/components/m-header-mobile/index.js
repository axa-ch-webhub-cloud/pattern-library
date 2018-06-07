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
import HeaderMobile from './js/header-mobile';

var AXAHeaderMobile = function (_BaseComponentGlobal) {
  _inherits(AXAHeaderMobile, _BaseComponentGlobal);

  _createClass(AXAHeaderMobile, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['offcanvas'];
    }
  }]);

  function AXAHeaderMobile() {
    _classCallCheck(this, AXAHeaderMobile);

    var _this = _possibleConstructorReturn(this, (AXAHeaderMobile.__proto__ || _Object$getPrototypeOf(AXAHeaderMobile)).call(this, { styles: styles, template: template }));

    _this.consumeContext('axa-header');
    return _this;
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */


  _createClass(AXAHeaderMobile, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAHeaderMobile.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderMobile.prototype), 'connectedCallback', this).call(this);

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
      _get(AXAHeaderMobile.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderMobile.prototype), 'disconnectedCallback', this).call(this);

      if (this.interaction) {
        this.interaction.destroy();
        delete this.interaction;
      }
    }
  }]);

  return AXAHeaderMobile;
}(BaseComponentGlobal);

AXAHeaderMobile.tagName = 'axa-header-mobile';


wcdomready(function () {
  window.customElements.define(AXAHeaderMobile.tagName, AXAHeaderMobile);
});

export default AXAHeaderMobile;