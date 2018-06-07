import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import BaseComponent from './base-component';

var memory = {};

/**
 * Base class {BaseComponentGlobal}. This class extends the {BaseComponent} and
 * applies threat the component as a global element. the use is not recommended but
 * in some occasion it can make sense. Typical use case is if a component
 * is used more than once and has lots of css.
 * The style will be included only once in the DOM and is insert in the head of the main document.
 */

var BaseComponentGlobal = function (_BaseComponent) {
  _inherits(BaseComponentGlobal, _BaseComponent);

  function BaseComponentGlobal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseComponentGlobal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseComponentGlobal.__proto__ || _Object$getPrototypeOf(BaseComponentGlobal)).call.apply(_ref, [this].concat(args))), _this), _this._appendStyles = function () {
      BaseComponentGlobal.appendGlobalStyles(_this._styles, _this.nodeName);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BaseComponentGlobal, null, [{
    key: 'appendGlobalStyles',


    /**
     * @static appendGlobalStyles - This allows you to add styles also without having to
     * append the custom element into the dom
     *
     * @param  {type} styles description
     * @param  {type} [nodeName=UUID] description
     * @return {type}        description
     */
    value: function appendGlobalStyles(styles) {
      var nodeName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : BaseComponent.uuidv4();

      if (styles && !memory[nodeName]) {
        var styleNode = document.createElement('style');
        var styleText = document.createTextNode(styles);

        memory[nodeName] = true;

        styleNode.appendChild(styleText);
        styleNode.setAttribute('data-c-name', nodeName.toLowerCase());

        // append directly to head
        document.head.appendChild(styleNode);
      }
    }
  }]);

  return BaseComponentGlobal;
}(BaseComponent);

export default BaseComponentGlobal;