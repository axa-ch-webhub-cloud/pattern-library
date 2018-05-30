import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAHeaderOthers = function (_BaseComponentGlobal) {
  _inherits(AXAHeaderOthers, _BaseComponentGlobal);

  _createClass(AXAHeaderOthers, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['items'];
    }
  }]);

  function AXAHeaderOthers() {
    _classCallCheck(this, AXAHeaderOthers);

    return _possibleConstructorReturn(this, (AXAHeaderOthers.__proto__ || _Object$getPrototypeOf(AXAHeaderOthers)).call(this, styles, template));
  }

  _createClass(AXAHeaderOthers, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAHeaderOthers.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderOthers.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-others';
    }
  }]);

  return AXAHeaderOthers;
}(BaseComponentGlobal);

AXAHeaderOthers.tagName = 'axa-header-others';


wcdomready(function () {
  window.customElements.define(AXAHeaderOthers.tagName, AXAHeaderOthers);
});

export default AXAHeaderOthers;