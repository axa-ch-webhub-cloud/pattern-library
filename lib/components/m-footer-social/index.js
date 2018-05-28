import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAFooterSocial = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAFooterSocial, _BaseComponentGlobal);
  babelHelpers.createClass(AXAFooterSocial, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['inline', 'items', 'light', 'title'];
    }
  }]);

  function AXAFooterSocial() {
    babelHelpers.classCallCheck(this, AXAFooterSocial);
    return babelHelpers.possibleConstructorReturn(this, (AXAFooterSocial.__proto__ || Object.getPrototypeOf(AXAFooterSocial)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAFooterSocial, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var inline = this.inline,
          light = this.light;


      this.className = classnames(this.initialClassName, 'm-footer-social', {
        'm-footer-social--inline': inline,
        'm-footer-social--light': light
      });
    }
  }]);
  return AXAFooterSocial;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-footer-social', AXAFooterSocial);
});

export default AXAFooterSocial;