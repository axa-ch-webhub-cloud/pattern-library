import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAIcon = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAIcon, _BaseComponentGlobal);
  babelHelpers.createClass(AXAIcon, null, [{
    key: 'observedAttributes',

    // Specify observed attributes so that
    // attributeChangedCallback will work
    get: function get() {
      return ['icon', 'classes'];
    }
  }]);

  function AXAIcon() {
    babelHelpers.classCallCheck(this, AXAIcon);
    return babelHelpers.possibleConstructorReturn(this, (AXAIcon.__proto__ || Object.getPrototypeOf(AXAIcon)).call(this, styles, template));
  }

  return AXAIcon;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-icon', AXAIcon);
});

export default AXAIcon;