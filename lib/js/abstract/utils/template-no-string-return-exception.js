import _Object$getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var TemplateNoStringReturnException = function (_Error) {
  _inherits(TemplateNoStringReturnException, _Error);

  function TemplateNoStringReturnException(node) {
    var _ref;

    _classCallCheck(this, TemplateNoStringReturnException);

    var message = '\n    Web Component ' + node.nodeName + '%c#' + node._id + ' does not accept string as a return from a template. Maybe use bel?}';

    // Pass remaining arguments (including vendor specific ones) to parent constructor

    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    var _this = _possibleConstructorReturn(this, (_ref = TemplateNoStringReturnException.__proto__ || _Object$getPrototypeOf(TemplateNoStringReturnException)).call.apply(_ref, [this, message].concat(params)));

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, TemplateNoStringReturnException);
    }

    // Custom debugging information
    _this.name = 'TemplateNoStringReturnException';
    return _this;
  }

  return TemplateNoStringReturnException;
}(Error);

export default TemplateNoStringReturnException;