/**
 * Make function application lazy.
 *
 * @param {function} func - The function to be executed lazily.
 * @returns {function(...[*]=): *}
 */

/* eslint-disable func-names */
function lazyFunction(func) {
  return function(...args) {
    return func.apply(this, args);
  };
}

export default lazyFunction;
