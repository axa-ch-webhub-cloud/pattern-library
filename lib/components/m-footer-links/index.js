import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';
import FooterLinks from './js/footer-links';

var AXAFooterLinks = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAFooterLinks, _BaseComponentGlobal);
  babelHelpers.createClass(AXAFooterLinks, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['cols', 'items', 'title'];
    }
  }]);

  function AXAFooterLinks() {
    babelHelpers.classCallCheck(this, AXAFooterLinks);
    return babelHelpers.possibleConstructorReturn(this, (AXAFooterLinks.__proto__ || Object.getPrototypeOf(AXAFooterLinks)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAFooterLinks, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAFooterLinks.prototype.__proto__ || Object.getPrototypeOf(AXAFooterLinks.prototype), 'connectedCallback', this).call(this);
    }
  }, {
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var cols = this.cols;


      this.className = classnames(this.initialClassName, 'm-footer-links', babelHelpers.defineProperty({
        'm-footer-links--cols': cols
      }, 'm-footer-links--cols-' + cols, cols));
    }
  }, {
    key: 'didRenderCallback',
    value: function didRenderCallback() {
      if (this.footerLinks) {
        this.footerLinks.destroy();
      }

      this.footerLinks = new FooterLinks(this);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (this.footerLinks) {
        this.footerLinks.destroy();
        delete this.footerLinks;
      }
    }
  }]);
  return AXAFooterLinks;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-footer-links', AXAFooterLinks);
});

export default AXAFooterLinks;