import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAHeaderMetaRight = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeaderMetaRight, _BaseComponentGlobal);

  function AXAHeaderMetaRight() {
    babelHelpers.classCallCheck(this, AXAHeaderMetaRight);
    return babelHelpers.possibleConstructorReturn(this, (AXAHeaderMetaRight.__proto__ || Object.getPrototypeOf(AXAHeaderMetaRight)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAHeaderMetaRight, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAHeaderMetaRight.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderMetaRight.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-meta-right';
    }
  }]);
  return AXAHeaderMetaRight;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header-meta-right', AXAHeaderMetaRight);
});

export default AXAHeaderMetaRight;