import debounce from './debounce';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide an options object to indicate whether
 * `func` should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
 * on the trailing edge of the timeout only if the throttled function is
 * invoked more than once during the `wait` timeout.
 *
 * @see http://drupalmotion.com/article/debounce-and-throttle-visual-explanation
 * @function
 * @memberOf module:utils
 * @category Function
 * @requires module:utils.debounce
 * @param {DebounceFunc} func - The function which will be throttled.
 * @param {number} [wait=0] - The time in milliseconds the execution of this function will be deferred.
 * @param {object} [options] - The options object.
 * @param {boolean} [options.leading=true] - The function is executed at the beginning (first call).
 * @param {boolean} [options.trailing=true] - The function will be executed at the end (last call, maybe deferred).
 * @returns {DebouncedFunction} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * window.addEventListener('scroll', throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = throttle(renewToken, 300000, { 'trailing': false });
 *
 * window.addEventListener('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * window.addEventListener('popstate', throttled.cancel);
 */

function throttle(func, wait, { leading = true, trailing = true } = {}) {
  return debounce(func, wait, {
    leading, maxWait: wait, trailing,
  });
}

export default throttle;
