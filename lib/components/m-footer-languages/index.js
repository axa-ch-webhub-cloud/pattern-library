import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAFooterLanguages = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAFooterLanguages, _BaseComponentGlobal);
  babelHelpers.createClass(AXAFooterLanguages, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['inline', 'items', 'short', 'title'];
    }
  }]);

  function AXAFooterLanguages() {
    babelHelpers.classCallCheck(this, AXAFooterLanguages);
    return babelHelpers.possibleConstructorReturn(this, (AXAFooterLanguages.__proto__ || Object.getPrototypeOf(AXAFooterLanguages)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAFooterLanguages, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var inline = this.inline;


      this.className = classnames(this.initialClassName, 'm-footer-languages', {
        'm-footer-languages--inline': inline
      });
    }
  }]);
  return AXAFooterLanguages;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-footer-languages', AXAFooterLanguages);
});

export default AXAFooterLanguages;