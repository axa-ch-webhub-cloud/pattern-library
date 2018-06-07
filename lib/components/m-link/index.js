import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import wcdomready from '../../js/wcdomready';

var AXALink = function (_BaseComponentGlobal) {
  _inherits(AXALink, _BaseComponentGlobal);

  _createClass(AXALink, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['color', 'size', 'motion', 'arrow', 'href', 'listed', 'icon', 'deco', 'icons-path-prefix'];
    }
  }]);

  function AXALink() {
    _classCallCheck(this, AXALink);

    return _possibleConstructorReturn(this, (AXALink.__proto__ || _Object$getPrototypeOf(AXALink)).call(this, { styles: styles, template: template }));
  }

  return AXALink;
}(BaseComponentGlobal);

AXALink.tagName = 'axa-link';


wcdomready(function () {
  window.customElements.define(AXALink.tagName, AXALink);
});

export default AXALink;