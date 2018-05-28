import classnames from 'classnames';
import getAttribute from '../../js/get-attribute';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import wcdomready from '../../js/wcdomready';

var AXAFooterLegals = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAFooterLegals, _BaseComponentGlobal);
  babelHelpers.createClass(AXAFooterLegals, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['bottom'];
    }
  }]);

  function AXAFooterLegals() {
    babelHelpers.classCallCheck(this, AXAFooterLegals);
    return babelHelpers.possibleConstructorReturn(this, (AXAFooterLegals.__proto__ || Object.getPrototypeOf(AXAFooterLegals)).call(this, styles));
  }

  babelHelpers.createClass(AXAFooterLegals, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAFooterLegals.prototype.__proto__ || Object.getPrototypeOf(AXAFooterLegals.prototype), 'connectedCallback', this).call(this);

      this.render();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback() {
      this.render();
    }
  }, {
    key: 'render',
    value: function render() {
      var bottom = getAttribute(this, 'bottom');

      this.className = classnames(this.initialClassName, 'm-footer-legals', {
        'm-footer-legals--bottom': bottom
      });
    }
  }]);
  return AXAFooterLegals;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-footer-legals', AXAFooterLegals);
});

export default AXAFooterLegals;