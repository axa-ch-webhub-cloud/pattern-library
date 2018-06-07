/**
 * Performs right-to-left function composition.
 * All functions must be unary.
 *
 * @param {Function} funcs - Functions to be composed.
 * @returns {function(*=): (*)} - Returns a unary composed function, which takes an initial value.
 */
var compose = function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return function (initial) {
    return funcs.reduceRight(function (result, fn) {
      return fn(result);
    }, initial);
  };
};

export default compose;