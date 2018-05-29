import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAIcon = function (_BaseComponentGlobal) {
  _inherits(AXAIcon, _BaseComponentGlobal);

  _createClass(AXAIcon, null, [{
    key: 'observedAttributes',


    // Specify observed attributes so that
    // attributeChangedCallback will work
    get: function get() {
      return ['icon', 'classes'];
    }
  }]);

  function AXAIcon() {
    _classCallCheck(this, AXAIcon);

    return _possibleConstructorReturn(this, (AXAIcon.__proto__ || _Object$getPrototypeOf(AXAIcon)).call(this, styles, template));
  }

  return AXAIcon;
}(BaseComponentGlobal);

AXAIcon.tagName = 'axa-icon';


wcdomready(function () {
  window.customElements.define(AXAIcon.tagName, AXAIcon);
});

export default AXAIcon;