import _defineProperty from 'babel-runtime/helpers/defineProperty';
import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import DropDown from './js/drop-down';
import wcdomready from '../../js/wcdomready';

var AXADropdown = function (_BaseComponentGlobal) {
  _inherits(AXADropdown, _BaseComponentGlobal);

  _createClass(AXADropdown, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['in-flow', 'items', 'native', 'size', 'title', 'value'];
    }
  }]);

  function AXADropdown() {
    _classCallCheck(this, AXADropdown);

    return _possibleConstructorReturn(this, (AXADropdown.__proto__ || _Object$getPrototypeOf(AXADropdown)).call(this, styles, template));
  }

  _createClass(AXADropdown, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var inFlow = this.inFlow,
          size = this.size,
          gpu = this.gpu;


      this.className = classnames(this.initialClassName, 'm-dropdown js-dropdown', _defineProperty({
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

AXADropdown.tagName = 'axa-dropdown';


wcdomready(function () {
  window.customElements.define(AXADropdown.tagName, AXADropdown);

  BaseComponentGlobal.appendGlobalStyles(styles);
});

export default AXADropdown;