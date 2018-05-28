export var noop = function noop() {};
export var toEqual = function toEqual(value, toBe) {
  return value === toBe;
};

// eslint-disable-next-line no-confusing-arrow
var maybe = function maybe(fn) {
  return function () {
    var comparison = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : toEqual;
    return function () {
      for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      return function () {
        for (var _len2 = arguments.length, toBes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          toBes[_key2] = arguments[_key2];
        }

        return function () {
          return comparison.apply(undefined, [].concat(values, toBes)) ? fn.apply(undefined, arguments) : noop();
        };
      };
    };
  };
};

export default maybe;