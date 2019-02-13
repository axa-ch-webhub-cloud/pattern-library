/**
 * Performs right-to-left function composition.
 * All functions must be unary.
 *
 * @param {Function} funcs - Functions to be composed.
 * @returns {function(*=): (*)} - Returns a unary composed function, which takes an initial value.
 */
const compose = (...funcs) => initial =>
  funcs.reduceRight((result, fn) => fn(result), initial);

export default compose;
