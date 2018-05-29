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

var AXAHeaderSearch = function (_BaseComponentGlobal) {
  _inherits(AXAHeaderSearch, _BaseComponentGlobal);

  _createClass(AXAHeaderSearch, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['action', 'href', 'method'];
    }
  }]);

  function AXAHeaderSearch() {
    _classCallCheck(this, AXAHeaderSearch);

    return _possibleConstructorReturn(this, (AXAHeaderSearch.__proto__ || _Object$getPrototypeOf(AXAHeaderSearch)).call(this, styles, template));
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */


  _createClass(AXAHeaderSearch, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAHeaderSearch.prototype.__proto__ || _Object$getPrototypeOf(AXAHeaderSearch.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-search';
    }
  }]);

  return AXAHeaderSearch;
}(BaseComponentGlobal);

AXAHeaderSearch.tagName = 'axa-header-search';


wcdomready(function () {
  window.customElements.define(AXAHeaderSearch.tagName, AXAHeaderSearch);
});

export default AXAHeaderSearch;