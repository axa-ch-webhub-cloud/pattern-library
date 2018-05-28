import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAVerticalRhythm = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAVerticalRhythm, _BaseComponentGlobal);

  function AXAVerticalRhythm() {
    babelHelpers.classCallCheck(this, AXAVerticalRhythm);
    return babelHelpers.possibleConstructorReturn(this, (AXAVerticalRhythm.__proto__ || Object.getPrototypeOf(AXAVerticalRhythm)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAVerticalRhythm, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAVerticalRhythm.prototype.__proto__ || Object.getPrototypeOf(AXAVerticalRhythm.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' a-vertical-rhythm';
    }
  }]);
  return AXAVerticalRhythm;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-vertical-rhythm', AXAVerticalRhythm);
});

export default AXAVerticalRhythm;