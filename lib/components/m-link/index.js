import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

var AXALink = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXALink, _BaseComponentGlobal);
  babelHelpers.createClass(AXALink, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['color', 'size', 'motion', 'arrow', 'href', 'listed', 'icon', 'deco'];
    }
  }]);

  function AXALink() {
    babelHelpers.classCallCheck(this, AXALink);
    return babelHelpers.possibleConstructorReturn(this, (AXALink.__proto__ || Object.getPrototypeOf(AXALink)).call(this, styles, template));
  }

  return AXALink;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-link', AXALink);

  BaseComponentGlobal.appendGlobalStyles(styles);
});

export default AXALink;