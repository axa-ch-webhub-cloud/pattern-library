import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import HeaderMobileNavigation from './js/header-mobile-navigation';
import wcdomready from '../../js/wcdomready';

var AXAHeaderMobileNavigation = function (_BaseComponentGlobal) {
  _inherits(AXAHeaderMobileNavigation, _BaseComponentGlobal);

  _createClass(AXAHeaderMobileNavigation, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['items', 'relative'];
    }
  }]);

  function AXAHeaderMobileNavigation() {
    _classCallCheck(this, AXAHeaderMobileNavigation);

    var _this = _possibleConstructorReturn(this, (AXAHeaderMobileNavigation.__proto__ || _Object$getPrototypeOf(AXAHeaderMobileNavigation)).call(this, { styles: styles, template: template }));

    _this.consumeContext('axa-header');
    return _this;
  }

  _createClass(AXAHeaderMobileNavigation, [{
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
      _get(AXAHeaderMobileNavigation.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderMobileNavigation.prototype), 'disconnectedCallback', this).call(this);

      this.interaction.destroy();
      delete this.interaction;
    }
  }]);

  return AXAHeaderMobileNavigation;
}(BaseComponentGlobal);

AXAHeaderMobileNavigation.tagName = 'axa-header-mobile-navigation';


wcdomready(function () {
  window.customElements.define(AXAHeaderMobileNavigation.tagName, AXAHeaderMobileNavigation);
});

export default AXAHeaderMobileNavigation;