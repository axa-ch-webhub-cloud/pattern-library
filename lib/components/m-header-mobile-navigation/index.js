import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import HeaderMobileNavigation from './js/header-mobile-navigation';
import wcdomready from '../../js/wcdomready';

var AXAHeaderMobileNavigation = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeaderMobileNavigation, _BaseComponentGlobal);
  babelHelpers.createClass(AXAHeaderMobileNavigation, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['items', 'relative'];
    }
  }]);

  function AXAHeaderMobileNavigation() {
    babelHelpers.classCallCheck(this, AXAHeaderMobileNavigation);

    var _this = babelHelpers.possibleConstructorReturn(this, (AXAHeaderMobileNavigation.__proto__ || Object.getPrototypeOf(AXAHeaderMobileNavigation)).call(this, styles, template));

    _this.selectContext('axa-header');
    return _this;
  }

  babelHelpers.createClass(AXAHeaderMobileNavigation, [{
    key: 'contextCallback',
    value: function contextCallback(contextNode) {
      if (this.interaction) {
        this.interaction.contextNode = contextNode;
      }
    }
  }, {
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var gpu = this.gpu,
          relative = this.relative;


      this.className = classnames(this.initialClassName, 'm-header-mobile-navigation', {
        'm-header-mobile-navigation--gpu': gpu,
        'm-header-mobile-navigation--relative': relative
      });
    }
  }, {
    key: 'didRenderCallback',
    value: function didRenderCallback() {
      var contextNode = this.contextNode;


      if (this.interaction) {
        this.interaction.destroy();
      }

      this.interaction = new HeaderMobileNavigation(this);

      if (contextNode) {
        this.contextCallback(contextNode);
      }
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      babelHelpers.get(AXAHeaderMobileNavigation.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderMobileNavigation.prototype), 'disconnectedCallback', this).call(this);

      this.interaction.destroy();
      delete this.interaction;
    }
  }]);
  return AXAHeaderMobileNavigation;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header-mobile-navigation', AXAHeaderMobileNavigation);
});

export default AXAHeaderMobileNavigation;