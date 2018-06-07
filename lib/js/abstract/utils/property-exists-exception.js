import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var PropertyExistsException = function (_Error) {
  _inherits(PropertyExistsException, _Error);

  function PropertyExistsException(key, node) {
    var _ref;

    _classCallCheck(this, PropertyExistsException);

    var message = '\n    Native Property >>>' + key + '<<< exists already at ' + node.nodeName + '#' + node._id + ' and evaluates to -> ' + node[key] + '.\n    Please consult the HTML spec for inherited DOM properties:\n    - Element Interface https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties\n    - Node Interface https://developer.mozilla.org/en-US/docs/Web/API/Node#Properties';

    // Pass remaining arguments (including vendor specific ones) to parent constructor

    for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      params[_key - 2] = arguments[_key];
    }

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    var _this = _possibleConstructorReturn(this, (_ref = PropertyExistsException.__proto__ || _Object$getPrototypeOf(PropertyExistsException)).call.apply(_ref, [this, message].concat(params)));

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, PropertyExistsException);
    }

    // Custom debugging information
    _this.name = 'PropertyExistsException';
    return _this;
  }

  return PropertyExistsException;
}(Error);

export default PropertyExistsException;