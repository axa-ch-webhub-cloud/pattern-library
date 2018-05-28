import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';
import Button from './js/button';

var AXAButton = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAButton, _BaseComponentGlobal);
  babelHelpers.createClass(AXAButton, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['arrow', 'classes', 'color', 'ghost', 'motion', 'size', 'tag', 'href', 'icon'];
    }
  }]);

  function AXAButton() {
    babelHelpers.classCallCheck(this, AXAButton);
    return babelHelpers.possibleConstructorReturn(this, (AXAButton.__proto__ || Object.getPrototypeOf(AXAButton)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAButton, [{
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

wcdomready(function () {
  window.customElements.define('axa-button', AXAButton);

  BaseComponentGlobal.appendGlobalStyles(styles);
});

export default AXAButton;