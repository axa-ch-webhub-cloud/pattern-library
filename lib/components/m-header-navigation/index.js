import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import Stroke from './js/stroke';
import HeaderNavigation from './js/header-navigation';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

var AXAHeaderNavigation = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeaderNavigation, _BaseComponentGlobal);
  babelHelpers.createClass(AXAHeaderNavigation, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['hyphenate', 'items', 'simplemenu'];
    }
  }]);

  function AXAHeaderNavigation() {
    babelHelpers.classCallCheck(this, AXAHeaderNavigation);

    var _this = babelHelpers.possibleConstructorReturn(this, (AXAHeaderNavigation.__proto__ || Object.getPrototypeOf(AXAHeaderNavigation)).call(this, styles, template));

    _this.selectContext('axa-header-main');
    return _this;
  }

  babelHelpers.createClass(AXAHeaderNavigation, [{
    key: 'contextCallback',
    value: function contextCallback(contextNode) {
      if (this.stroke) {
        this.stroke.contextNode = contextNode;
      }
    }
  }, {
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var hyphenate = this.hyphenate;


      this.className = classnames(this.initialClassName, 'm-header-navigation', {
        'm-header-navigation--hyphenate': hyphenate
      });
    }
  }, {
    key: 'didRenderCallback',
    value: function didRenderCallback() {
      var contextNode = this.contextNode,
          simpleMenu = this.simpleMenu;


      if (this.stroke) {
        this.stroke.destroy();
      }

      if (this.navigation) {
        this.navigation.destroy();
      }

      // simple menu nicht mehr brauchen. Stroke checkt if ein submenu da ist. un wenn ja dann mach default action
      this.stroke = new Stroke(this, {
        simpleMenu: simpleMenu
      });

      if (contextNode) {
        this.contextCallback(contextNode);
      }

      this.navigation = new HeaderNavigation(this, {
        simpleMenu: simpleMenu
      });
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      babelHelpers.get(AXAHeaderNavigation.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderNavigation.prototype), 'disconnectedCallback', this).call(this);

      if (this.stroke) {
        this.stroke.destroy();
        delete this.stroke;
      }

      if (this.navigation) {
        this.navigation.destroy();
        delete this.navigation;
      }
    }
  }]);
  return AXAHeaderNavigation;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header-navigation', AXAHeaderNavigation);
});

export default AXAHeaderNavigation;