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
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAFooterMain = function (_BaseComponentGlobal) {
  _inherits(AXAFooterMain, _BaseComponentGlobal);

  _createClass(AXAFooterMain, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['light'];
    }
  }]);

  function AXAFooterMain() {
    _classCallCheck(this, AXAFooterMain);

    return _possibleConstructorReturn(this, (AXAFooterMain.__proto__ || _Object$getPrototypeOf(AXAFooterMain)).call(this, styles, template));
  }

  _createClass(AXAFooterMain, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAFooterMain.prototype.__proto__ || _Object$getPrototypeOf(AXAFooterMain.prototype), 'connectedCallback', this).call(this);

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

AXAFooterMain.tagName = 'axa-footer-main';


wcdomready(function () {
  window.customElements.define(AXAFooterMain.tagName, AXAFooterMain);
});

export default AXAFooterMain;