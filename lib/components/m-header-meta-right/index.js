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

var AXAHeaderMetaRight = function (_BaseComponentGlobal) {
  _inherits(AXAHeaderMetaRight, _BaseComponentGlobal);

  function AXAHeaderMetaRight() {
    _classCallCheck(this, AXAHeaderMetaRight);

    return _possibleConstructorReturn(this, (AXAHeaderMetaRight.__proto__ || _Object$getPrototypeOf(AXAHeaderMetaRight)).call(this, styles, template));
  }

  _createClass(AXAHeaderMetaRight, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAHeaderMetaRight.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderMetaRight.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-meta-right';
    }
  }]);

  return AXAHeaderMetaRight;
}(BaseComponentGlobal);

AXAHeaderMetaRight.tagName = 'axa-header-meta-right';


wcdomready(function () {
  window.customElements.define(AXAHeaderMetaRight.tagName, AXAHeaderMetaRight);
});

export default AXAHeaderMetaRight;