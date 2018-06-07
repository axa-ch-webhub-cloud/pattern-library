import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAFooterSocial = function (_BaseComponentGlobal) {
  _inherits(AXAFooterSocial, _BaseComponentGlobal);

  _createClass(AXAFooterSocial, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['inline', 'items', 'light', 'title'];
    }
  }]);

  function AXAFooterSocial() {
    _classCallCheck(this, AXAFooterSocial);

    return _possibleConstructorReturn(this, (AXAFooterSocial.__proto__ || _Object$getPrototypeOf(AXAFooterSocial)).call(this, { styles: styles, template: template }));
  }

  _createClass(AXAFooterSocial, [{
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

AXAFooterSocial.tagName = 'axa-footer-social';


wcdomready(function () {
  window.customElements.define(AXAFooterSocial.tagName, AXAFooterSocial);
});

export default AXAFooterSocial;