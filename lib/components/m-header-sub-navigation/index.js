import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

var AXASubNavigation = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXASubNavigation, _BaseComponentGlobal);
  babelHelpers.createClass(AXASubNavigation, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['flyout', 'index-title', 'index-url', 'items'];
    }
  }]);

  function AXASubNavigation() {
    babelHelpers.classCallCheck(this, AXASubNavigation);
    return babelHelpers.possibleConstructorReturn(this, (AXASubNavigation.__proto__ || Object.getPrototypeOf(AXASubNavigation)).call(this, styles, template));
  }

  babelHelpers.createClass(AXASubNavigation, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var flyout = this.flyout;


      this.className = classnames(this.initialClassName, 'm-header-sub-navigation js-header-sub-navigation', {
        'm-header-sub-navigation--flyout': flyout
      });
    }
  }]);
  return AXASubNavigation;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header-sub-navigation', AXASubNavigation);
});

export default AXASubNavigation;