var PropertyExistsException = function (_Error) {
  babelHelpers.inherits(PropertyExistsException, _Error);

  function PropertyExistsException(key, node) {
    var _ref;

    babelHelpers.classCallCheck(this, PropertyExistsException);

    var message = 'Property >>>' + key + '<<< exists at ' + node.nodeName + '#' + node._id + ' and evaluates to -> ' + node[key];
    // Pass remaining arguments (including vendor specific ones) to parent constructor

    for (var _len = arguments.length, params = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      params[_key - 2] = arguments[_key];
    }

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    var _this = babelHelpers.possibleConstructorReturn(this, (_ref = PropertyExistsException.__proto__ || Object.getPrototypeOf(PropertyExistsException)).call.apply(_ref, [this, message].concat(params)));

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