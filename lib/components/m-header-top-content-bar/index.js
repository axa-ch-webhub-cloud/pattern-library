import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

var AXAHeaderTopContentBar = function (_BaseComponentGlobal) {
  _inherits(AXAHeaderTopContentBar, _BaseComponentGlobal);

  _createClass(AXAHeaderTopContentBar, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['type'];
    }
  }]);

  function AXAHeaderTopContentBar() {
    _classCallCheck(this, AXAHeaderTopContentBar);

    return _possibleConstructorReturn(this, (AXAHeaderTopContentBar.__proto__ || _Object$getPrototypeOf(AXAHeaderTopContentBar)).call(this, styles, template));
  }

  _createClass(AXAHeaderTopContentBar, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var type = this.type;


      this.className = this.initialClassName + ' m-header-top-content-bar m-header-top-content-bar--' + type;
    }
  }]);

  return AXAHeaderTopContentBar;
}(BaseComponentGlobal);

AXAHeaderTopContentBar.tagName = 'axa-header-top-content-bar';


wcdomready(function () {
  window.customElements.define(AXAHeaderTopContentBar.tagName, AXAHeaderTopContentBar);
});

export default AXAHeaderTopContentBar;