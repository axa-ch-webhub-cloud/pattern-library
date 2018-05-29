import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';
import FooterLinks from './js/footer-links';

var AXAFooterLinks = function (_BaseComponentGlobal) {
  _inherits(AXAFooterLinks, _BaseComponentGlobal);

  _createClass(AXAFooterLinks, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['cols', 'items', 'title'];
    }
  }]);

  function AXAFooterLinks() {
    _classCallCheck(this, AXAFooterLinks);

    return _possibleConstructorReturn(this, (AXAFooterLinks.__proto__ || _Object$getPrototypeOf(AXAFooterLinks)).call(this, styles, template));
  }

  _createClass(AXAFooterLinks, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAFooterLinks.prototype.__proto__ || _Object$getPrototypeOf(AXAFooterLinks.prototype), 'connectedCallback', this).call(this);
    }
  }, {
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var cols = this.cols;


      this.className = classnames(this.initialClassName, 'm-footer-links', _defineProperty({
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

AXAFooterLinks.tagName = 'axa-footer-links';


wcdomready(function () {
  window.customElements.define(AXAFooterLinks.tagName, AXAFooterLinks);
});

export default AXAFooterLinks;