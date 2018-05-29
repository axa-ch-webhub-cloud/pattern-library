import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXATypo = function (_BaseComponentGlobal) {
  _inherits(AXATypo, _BaseComponentGlobal);

  function AXATypo() {
    _classCallCheck(this, AXATypo);

    return _possibleConstructorReturn(this, (AXATypo.__proto__ || _Object$getPrototypeOf(AXATypo)).call(this, styles, template));
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */


  _createClass(AXATypo, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXATypo.prototype.__proto__ || _Object$getPrototypeOf(AXATypo.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' a-typo';
    }
  }]);

  return AXATypo;
}(BaseComponentGlobal);

AXATypo.tagName = 'axa-typo';


wcdomready(function () {
  window.customElements.define(AXATypo.tagName, AXATypo);
});

export default AXATypo;