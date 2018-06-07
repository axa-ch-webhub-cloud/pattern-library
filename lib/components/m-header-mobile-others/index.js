import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

var AXAHeaderMobileOthers = function (_BaseComponentGlobal) {
  _inherits(AXAHeaderMobileOthers, _BaseComponentGlobal);

  _createClass(AXAHeaderMobileOthers, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['items'];
    }
  }]);

  function AXAHeaderMobileOthers() {
    _classCallCheck(this, AXAHeaderMobileOthers);

    return _possibleConstructorReturn(this, (AXAHeaderMobileOthers.__proto__ || _Object$getPrototypeOf(AXAHeaderMobileOthers)).call(this, { styles: styles, template: template }));
  }

  _createClass(AXAHeaderMobileOthers, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAHeaderMobileOthers.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderMobileOthers.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-mobile-others';
    }
  }]);

  return AXAHeaderMobileOthers;
}(BaseComponentGlobal);

AXAHeaderMobileOthers.tagName = 'axa-header-mobile-others';


wcdomready(function () {
  window.customElements.define(AXAHeaderMobileOthers.tagName, AXAHeaderMobileOthers);
});

export default AXAHeaderMobileOthers;