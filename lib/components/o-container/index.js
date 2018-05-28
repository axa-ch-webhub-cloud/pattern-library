import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAContainer = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAContainer, _BaseComponentGlobal);

  function AXAContainer() {
    babelHelpers.classCallCheck(this, AXAContainer);
    return babelHelpers.possibleConstructorReturn(this, (AXAContainer.__proto__ || Object.getPrototypeOf(AXAContainer)).call(this, styles, template));
  }

  return AXAContainer;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-container', AXAContainer);
});

export default AXAContainer;