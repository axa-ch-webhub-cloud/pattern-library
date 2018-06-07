import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

var AXASubNavigation = function (_BaseComponentGlobal) {
  _inherits(AXASubNavigation, _BaseComponentGlobal);

  _createClass(AXASubNavigation, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['flyout', 'index-title', 'index-url', 'items'];
    }
  }]);

  function AXASubNavigation() {
    _classCallCheck(this, AXASubNavigation);

    return _possibleConstructorReturn(this, (AXASubNavigation.__proto__ || _Object$getPrototypeOf(AXASubNavigation)).call(this, { styles: styles, template: template }));
  }

  _createClass(AXASubNavigation, [{
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

AXASubNavigation.tagName = 'axa-header-sub-navigation';


wcdomready(function () {
  window.customElements.define(AXASubNavigation.tagName, AXASubNavigation);
});

export default AXASubNavigation;