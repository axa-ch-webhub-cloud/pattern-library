import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAHeaderMeta = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeaderMeta, _BaseComponentGlobal);

  function AXAHeaderMeta() {
    babelHelpers.classCallCheck(this, AXAHeaderMeta);
    return babelHelpers.possibleConstructorReturn(this, (AXAHeaderMeta.__proto__ || Object.getPrototypeOf(AXAHeaderMeta)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAHeaderMeta, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAHeaderMeta.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderMeta.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-meta';
    }
  }]);
  return AXAHeaderMeta;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header-meta', AXAHeaderMeta);
});

export default AXAHeaderMeta;