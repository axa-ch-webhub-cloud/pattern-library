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

var AXAHeaderMeta = function (_BaseComponentGlobal) {
  _inherits(AXAHeaderMeta, _BaseComponentGlobal);

  function AXAHeaderMeta() {
    _classCallCheck(this, AXAHeaderMeta);

    return _possibleConstructorReturn(this, (AXAHeaderMeta.__proto__ || _Object$getPrototypeOf(AXAHeaderMeta)).call(this, styles, template));
  }

  _createClass(AXAHeaderMeta, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAHeaderMeta.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderMeta.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-meta';
    }
  }]);

  return AXAHeaderMeta;
}(BaseComponentGlobal);

AXAHeaderMeta.tagName = 'axa-header-meta';


wcdomready(function () {
  window.customElements.define(AXAHeaderMeta.tagName, AXAHeaderMeta);
});

export default AXAHeaderMeta;