import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';
import Button from './js/button';

var AXAButton = function (_BaseComponentGlobal) {
  _inherits(AXAButton, _BaseComponentGlobal);

  _createClass(AXAButton, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['arrow', 'classes', 'color', 'ghost', 'motion', 'size', 'tag', 'href', 'icon'];
    }
  }]);

  function AXAButton() {
    _classCallCheck(this, AXAButton);

    return _possibleConstructorReturn(this, (AXAButton.__proto__ || _Object$getPrototypeOf(AXAButton)).call(this, { styles: styles, template: template }));
  }

  _createClass(AXAButton, [{
    key: 'didRenderCallback',
    value: function didRenderCallback() {
      if (this.button) {
        this.button.destroy();
      }

      this.button = new Button(this);
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (this.button) {
        this.button.destroy();
        delete this.button;
      }
    }
  }]);

  return AXAButton;
}(BaseComponentGlobal);

AXAButton.tagName = 'axa-button';


wcdomready(function () {
  window.customElements.define(AXAButton.tagName, AXAButton);

  BaseComponentGlobal.appendGlobalStyles(styles);
});

export default AXAButton;