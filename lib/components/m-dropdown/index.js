import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import DropDown from './js/drop-down';
import wcdomready from '../../js/wcdomready';

var AXADropdown = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXADropdown, _BaseComponentGlobal);
  babelHelpers.createClass(AXADropdown, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['in-flow', 'items', 'native', 'size', 'title', 'value'];
    }
  }]);

  function AXADropdown() {
    babelHelpers.classCallCheck(this, AXADropdown);
    return babelHelpers.possibleConstructorReturn(this, (AXADropdown.__proto__ || Object.getPrototypeOf(AXADropdown)).call(this, styles, template));
  }

  babelHelpers.createClass(AXADropdown, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var inFlow = this.inFlow,
          size = this.size,
          gpu = this.gpu;


      this.className = classnames(this.initialClassName, 'm-dropdown js-dropdown', babelHelpers.defineProperty({
        'm-dropdown--in-flow': inFlow,
        'm-dropdown--gpu': gpu
      }, 'm-dropdown--' + size, size));
    }
  }, {
    key: 'didRenderCallback',
    value: function didRenderCallback() {
      if (this.dropDown) {
        this.dropDown.destroy();
      }

      this.dropDown = new DropDown(this, {
        containerClass: null
      });
    }
  }, {
    key: 'disconnectedCallback',
    value: function disconnectedCallback() {
      if (this.dropDown) {
        this.dropDown.destroy();
        delete this.dropDown;
      }
    }
  }]);
  return AXADropdown;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-dropdown', AXADropdown);

  BaseComponentGlobal.appendGlobalStyles(styles);
});

export default AXADropdown;