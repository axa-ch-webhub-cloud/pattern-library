import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import DropDown from '../m-dropdown/js/drop-down';
import wcdomready from '../../js/wcdomready';

var AXAHeaderLanguages = function (_BaseComponentGlobal) {
  _inherits(AXAHeaderLanguages, _BaseComponentGlobal);

  _createClass(AXAHeaderLanguages, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['items'];
    }
  }]);

  function AXAHeaderLanguages() {
    _classCallCheck(this, AXAHeaderLanguages);

    return _possibleConstructorReturn(this, (AXAHeaderLanguages.__proto__ || _Object$getPrototypeOf(AXAHeaderLanguages)).call(this, { styles: styles, template: template }));
  }

  _createClass(AXAHeaderLanguages, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAHeaderLanguages.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderLanguages.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-languages js-dropdown';
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
      _get(AXAHeaderLanguages.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderLanguages.prototype), 'disconnectedCallback', this).call(this);

      this.dropDown.destroy();
      delete this.dropDown;
    }
  }]);

  return AXAHeaderLanguages;
}(BaseComponentGlobal);

AXAHeaderLanguages.tagName = 'axa-header-languages';


wcdomready(function () {
  window.customElements.define(AXAHeaderLanguages.tagName, AXAHeaderLanguages);
});

export default AXAHeaderLanguages;