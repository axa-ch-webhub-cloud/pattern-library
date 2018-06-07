import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _get from 'babel-runtime/helpers/get';
import _inherits from 'babel-runtime/helpers/inherits';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

var AXAVerticalRhythm = function (_BaseComponentGlobal) {
  _inherits(AXAVerticalRhythm, _BaseComponentGlobal);

  function AXAVerticalRhythm() {
    _classCallCheck(this, AXAVerticalRhythm);

    return _possibleConstructorReturn(this, (AXAVerticalRhythm.__proto__ || _Object$getPrototypeOf(AXAVerticalRhythm)).call(this, { styles: styles, template: template }));
  }

  _createClass(AXAVerticalRhythm, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      _get(AXAVerticalRhythm.prototype.__proto__ || _Object$getPrototypeOf(AXAVerticalRhythm.prototype), 'connectedCallback', this).call(this);

      this.className = this.initialClassName + ' a-vertical-rhythm';
    }
  }]);

  return AXAVerticalRhythm;
}(BaseComponentGlobal);

AXAVerticalRhythm.tagName = 'axa-vertical-rhythm';


wcdomready(function () {
  window.customElements.define(AXAVerticalRhythm.tagName, AXAVerticalRhythm);
});

export default AXAVerticalRhythm;