import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAFooterSub = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAFooterSub, _BaseComponentGlobal);

  function AXAFooterSub() {
    babelHelpers.classCallCheck(this, AXAFooterSub);
    return babelHelpers.possibleConstructorReturn(this, (AXAFooterSub.__proto__ || Object.getPrototypeOf(AXAFooterSub)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAFooterSub, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAFooterSub.prototype.__proto__ || Object.getPrototypeOf(AXAFooterSub.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-footer-sub';
    }
  }]);
  return AXAFooterSub;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-footer-sub', AXAFooterSub);
});

export default AXAFooterSub;