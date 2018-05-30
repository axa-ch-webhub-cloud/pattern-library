import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAContainer = function (_BaseComponentGlobal) {
  _inherits(AXAContainer, _BaseComponentGlobal);

  function AXAContainer() {
    _classCallCheck(this, AXAContainer);

    return _possibleConstructorReturn(this, (AXAContainer.__proto__ || _Object$getPrototypeOf(AXAContainer)).call(this, styles, template));
  }

  return AXAContainer;
}(BaseComponentGlobal);

AXAContainer.tagName = 'axa-container';


wcdomready(function () {
  window.customElements.define(AXAContainer.tagName, AXAContainer);
});

export default AXAContainer;