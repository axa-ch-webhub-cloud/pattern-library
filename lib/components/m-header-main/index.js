import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _createClass from 'babel-runtime/helpers/createClass';
import _inherits from 'babel-runtime/helpers/inherits';
import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAHeaderMain = function (_BaseComponentGlobal) {
  _inherits(AXAHeaderMain, _BaseComponentGlobal);

  _createClass(AXAHeaderMain, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['first-left'];
    }
  }]);

  function AXAHeaderMain() {
    _classCallCheck(this, AXAHeaderMain);

    var _this = _possibleConstructorReturn(this, (AXAHeaderMain.__proto__ || _Object$getPrototypeOf(AXAHeaderMain)).call(this, styles, template));

    _this.enableContext();
    return _this;
  }

  _createClass(AXAHeaderMain, [{
    key: 'willRenderCallback',
    value: function willRenderCallback() {
      var firstLeft = this.firstLeft;


      this.className = classnames(this.initialClassName, 'm-header-main', {
        'm-header-main--first-left': firstLeft
      });
    }
  }]);

  return AXAHeaderMain;
}(BaseComponentGlobal);

AXAHeaderMain.tagName = 'axa-header-main';


wcdomready(function () {
  window.customElements.define(AXAHeaderMain.tagName, AXAHeaderMain);
});

export default AXAHeaderMain;