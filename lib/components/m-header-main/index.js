import classnames from 'classnames';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAHeaderMain = function (_BaseComponentGlobal) {
  babelHelpers.inherits(AXAHeaderMain, _BaseComponentGlobal);
  babelHelpers.createClass(AXAHeaderMain, null, [{
    key: 'observedAttributes',
    get: function get() {
      return ['first-left'];
    }
  }]);

  function AXAHeaderMain() {
    babelHelpers.classCallCheck(this, AXAHeaderMain);

    var _this = babelHelpers.possibleConstructorReturn(this, (AXAHeaderMain.__proto__ || Object.getPrototypeOf(AXAHeaderMain)).call(this, styles, template));

    _this.enableContext();
    return _this;
  }

  babelHelpers.createClass(AXAHeaderMain, [{
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

wcdomready(function () {
  window.customElements.define('axa-header-main', AXAHeaderMain);
});

export default AXAHeaderMain;