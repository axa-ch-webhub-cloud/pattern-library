import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import classnames from 'classnames';
import getAttribute from '../../js/get-attribute';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import wcdomready from '../../js/wcdomready';

var AXAFooterLegals = function (_BaseComponentGlobal) {
  _inherits(AXAFooterLegals, _BaseComponentGlobal);

  _createClass(AXAFooterLegals, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['bottom'];
    }
  }]);

  function AXAFooterLegals() {
    _classCallCheck(this, AXAFooterLegals);

    return _possibleConstructorReturn(this, (AXAFooterLegals.__proto__ || _Object$getPrototypeOf(AXAFooterLegals)).call(this, { styles: styles }));
  }

  _createClass(AXAFooterLegals, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAFooterLegals.prototype.__proto__ || _Object$getPrototypeOf(AXAFooterLegals.prototype), 'connectedCallback', this).call(this);

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

AXAFooterLegals.tagName = 'axa-footer-legals';


wcdomready(function () {
  window.customElements.define(AXAFooterLegals.tagName, AXAFooterLegals);
});

export default AXAFooterLegals;