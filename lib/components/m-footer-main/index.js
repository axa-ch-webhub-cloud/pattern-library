import classnames from 'classnames';
import getAttribute from '../../js/get-attribute';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAFooterMain = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAFooterMain, _BaseComponentGlobal);
  babelHelpers.createClass(AXAFooterMain, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['light'];
    }
  }]);

  function AXAFooterMain() {
    babelHelpers.classCallCheck(this, AXAFooterMain);
    return babelHelpers.possibleConstructorReturn(this, (AXAFooterMain.__proto__ || Object.getPrototypeOf(AXAFooterMain)).call(this, styles, template));
  }

  babelHelpers.createClass(AXAFooterMain, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      babelHelpers.get(AXAFooterMain.prototype.__proto__ || Object.getPrototypeOf(AXAFooterMain.prototype), 'connectedCallback', this).call(this);

      this.renderWCNode();
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback() {
      this.renderWCNode();
    }
  }, {
    key: 'renderWCNode',
    value: function renderWCNode() {
      var light = getAttribute(this, 'light');

      this.className = classnames(this.initialClassName, 'm-footer-main', {
        'm-footer-main--light': light
      });
    }
  }]);
  return AXAFooterMain;
}(BaseComponentGlobal);

wcdomready(function () {
  window.customElements.define('axa-footer-main', AXAFooterMain);
});

export default AXAFooterMain;