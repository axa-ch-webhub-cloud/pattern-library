import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import DropDown from '../m-dropdown/js/drop-down';
import wcdomready from '../../js/wcdomready';

var AXAHeaderLanguages = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeaderLanguages, _BaseComponentGlobal);
  babelHelpers.createClass(AXAHeaderLanguages, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['items'];
    }
  }]);

  function AXAHeaderLanguages() {
    babelHelpers.classCallCheck(this, AXAHeaderLanguages);
    return babelHelpers.possibleConstructorReturn(this, (AXAHeaderLanguages.__proto__ || Object.getPrototypeOf(AXAHeaderLanguages)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAHeaderLanguages, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAHeaderLanguages.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderLanguages.prototype), 'connectedCallback', this).call(this);

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
      babelHelpers.get(AXAHeaderLanguages.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderLanguages.prototype), 'disconnectedCallback', this).call(this);

      this.dropDown.destroy();
      delete this.dropDown;
    }
  }]);
  return AXAHeaderLanguages;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header-languages', AXAHeaderLanguages);
});

export default AXAHeaderLanguages;