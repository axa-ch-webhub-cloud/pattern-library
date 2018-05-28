import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';
import Burger from './js/burger';

var AXAHeaderBurger = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeaderBurger, _BaseComponentGlobal);

  function AXAHeaderBurger() {
    babelHelpers.classCallCheck(this, AXAHeaderBurger);

    var _this = babelHelpers.possibleConstructorReturn(this, (AXAHeaderBurger.__proto__ || Object.getPrototypeOf(AXAHeaderBurger)).call(this, styles, template));

    _this.selectContext('axa-header');
    return _this;
  }

  babelHelpers.createClass(AXAHeaderBurger, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAHeaderBurger.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderBurger.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-burger';
      this.burger = new Burger(this);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      babelHelpers.get(AXAHeaderBurger.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderBurger.prototype), 'disconnectedCallback', this).call(this);

      this.burger.destroy();
      delete this.burger;
    }
  }, {
    key: 'contextCallback',
    value: function contextCallback(contextNode) {
      this.burger.contextNode = contextNode;
    }
  }]);
  return AXAHeaderBurger;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header-burger', AXAHeaderBurger);
});

export default AXAHeaderBurger;