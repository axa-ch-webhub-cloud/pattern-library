import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';
import Burger from './js/burger';

var AXAHeaderBurger = function (_BaseComponentGlobal) {
  _inherits(AXAHeaderBurger, _BaseComponentGlobal);

  function AXAHeaderBurger() {
    _classCallCheck(this, AXAHeaderBurger);

    var _this = _possibleConstructorReturn(this, (AXAHeaderBurger.__proto__ || _Object$getPrototypeOf(AXAHeaderBurger)).call(this, { styles: styles, template: template }));

    _this.consumeContext('axa-header');
    return _this;
  }

  _createClass(AXAHeaderBurger, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAHeaderBurger.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderBurger.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-burger';
      this.burger = new Burger(this);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      _get(AXAHeaderBurger.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderBurger.prototype), 'disconnectedCallback', this).call(this);

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

AXAHeaderBurger.tagName = 'axa-header-burger';


wcdomready(function () {
  window.customElements.define(AXAHeaderBurger.tagName, AXAHeaderBurger);
});

export default AXAHeaderBurger;