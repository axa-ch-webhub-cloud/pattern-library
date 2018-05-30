import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import BaseComponent from './base-component';

/**
 * Base class {BaseComponentShadow}. This class extends the {BaseComponent} and
 * applies a shadow dom to it. Please be aware that only a few browser
 * implements this correctly. With other browser works as well, apart of the global contamination.
 * So if a inner shadow override a upper shadow and has the same class, the upper will be overridden from the
 * inners class as it has only one DOM.
 *
 * https://caniuse.com/#feat=shadowdom
 */

var BaseComponentShadow = function (_BaseComponent) {
  _inherits(BaseComponentShadow, _BaseComponent);

  function BaseComponentShadow() {
    _classCallCheck(this, BaseComponentShadow);

    return _possibleConstructorReturn(this, (BaseComponentShadow.__proto__ || _Object$getPrototypeOf(BaseComponentShadow)).apply(this, arguments));
  }

  _createClass(BaseComponentShadow, [{
    key: 'connectedCallback',

    /**
     * connectedCallback - description
     *
     * @param  {type} mode = 'open' description
     * @return {type}               description
     */
    value: function connectedCallback() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'open';

      var shadowRoot = this.attachShadow({ mode: mode });
      this._appendStyles(shadowRoot);
      this.render();
    }
  }]);

  return BaseComponentShadow;
}(BaseComponent);

export default BaseComponentShadow;