import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAHeaderSearch = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeaderSearch, _BaseComponentGlobal);
  babelHelpers.createClass(AXAHeaderSearch, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['action', 'href', 'method'];
    }
  }]);

  function AXAHeaderSearch() {
    babelHelpers.classCallCheck(this, AXAHeaderSearch);
    return babelHelpers.possibleConstructorReturn(this, (AXAHeaderSearch.__proto__ || Object.getPrototypeOf(AXAHeaderSearch)).call(this, styles, template));
  }

  /**
   * REF: https://www.w3.org/TR/custom-elements/#custom-element-conformance
   */


  babelHelpers.createClass(AXAHeaderSearch, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAHeaderSearch.prototype.__proto__ || Object.getPrototypeOf(AXAHeaderSearch.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' m-header-search';
    }
  }]);
  return AXAHeaderSearch;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-header-search', AXAHeaderSearch);
});

export default AXAHeaderSearch;