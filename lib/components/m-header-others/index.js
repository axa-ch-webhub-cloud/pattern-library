import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAHeaderOthers = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeaderOthers, _BaseComponentGlobal);
  babelHelpers.createClass(AXAHeaderOthers, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['items'];
    }
  }]);

  function AXAHeaderOthers() {
    babelHelpers.classCallCheck(this, AXAHeaderOthers);
    return babelHelpers.possibleConstructorReturn(this, (AXAHeaderOthers.__proto__ || Object.getPrototypeOf(AXAHeaderOthers)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAHeaderOthers, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAHeaderOthers.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderOthers.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-others';
    }
  }]);
  return AXAHeaderOthers;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header-others', AXAHeaderOthers);
});

export default AXAHeaderOthers;