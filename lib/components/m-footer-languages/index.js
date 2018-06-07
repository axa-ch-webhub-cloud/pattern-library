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

var AXAFooterLanguages = function (_BaseComponentGlobal) {
  _inherits(AXAFooterLanguages, _BaseComponentGlobal);

  _createClass(AXAFooterLanguages, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['inline', 'items', 'short', 'title'];
    }
  }]);

  function AXAFooterLanguages() {
    _classCallCheck(this, AXAFooterLanguages);

    return _possibleConstructorReturn(this, (AXAFooterLanguages.__proto__ || _Object$getPrototypeOf(AXAFooterLanguages)).call(this, { styles: styles, template: template }));
  }

  _createClass(AXAFooterLanguages, [{
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

AXAFooterLanguages.tagName = 'axa-footer-languages';


wcdomready(function () {
  window.customElements.define(AXAFooterLanguages.tagName, AXAFooterLanguages);
});

export default AXAFooterLanguages;