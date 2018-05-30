import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAFooterSub = function (_BaseComponentGlobal) {
  _inherits(AXAFooterSub, _BaseComponentGlobal);

  function AXAFooterSub() {
    _classCallCheck(this, AXAFooterSub);

    return _possibleConstructorReturn(this, (AXAFooterSub.__proto__ || _Object$getPrototypeOf(AXAFooterSub)).call(this, styles, template));
  }

  _createClass(AXAFooterSub, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAFooterSub.prototype.__proto__ || _Object$getPrototypeOf(AXAFooterSub.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-footer-sub';
    }
  }]);

  return AXAFooterSub;
}(BaseComponentGlobal);

AXAFooterSub.tagName = 'axa-footer-sub';


wcdomready(function () {
  window.customElements.define(AXAFooterSub.tagName, AXAFooterSub);
});

export default AXAFooterSub;