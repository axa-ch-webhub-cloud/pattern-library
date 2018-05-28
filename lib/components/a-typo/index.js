import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXATypo = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXATypo, _BaseComponentGlobal);

  function AXATypo() {
    babelHelpers.classCallCheck(this, AXATypo);
    return babelHelpers.possibleConstructorReturn(this, (AXATypo.__proto__ || Object.getPrototypeOf(AXATypo)).call(this, styles, template));
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */


  babelHelpers.createClass(AXATypo, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXATypo.prototype.__proto__ || Object.getPrototypeOf(AXATypo.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' a-typo';
    }
  }]);
  return AXATypo;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-typo', AXATypo);
});

export default AXATypo;