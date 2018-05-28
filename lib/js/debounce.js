/**
 * Function to be debounced.
 * @callback DebounceFunction
 * @param {...*} [args] - Whatever arguments this function accepts.
 */

/**
 * Function Debouncer.
 * @category Function
 * @typedef {Function} FunctionDebouncer
 * @property {Function} cancel - Cancels the whole debounce.
 * @property {Function} flush - Executes debounced function immediately.
 */

/**
 * Creates a debounced function that delays invoking func until after `wait` milliseconds have elapsed
 * since the last time the debounced function was invoked. The debounced function comes with
 * a `cancel` method to cancel delayed func invocations and a `flush` method to immediately invoke them.
 * Provide an options object to indicate whether func should be invoked on the `leading` and/or `trailing` edge
 * of the wait timeout. The func is invoked with the last arguments provided to the debounced function.
 * Subsequent calls to the debounced function return the result of the last func invocation.
 *
 * @see http://drupalmotion.com/article/debounce-and-throttle-visual-explanation
 * @function
 * @memberOf module:utils
 * @category Function
 * @requires module:utils.isObject
 * @param {DebounceFunction} func - The function which will be debounced.
 * @param {Number} [wait=0] - The time in milliseconds the execution of this function will be deferred.
 * @param {object} [options] - The options object.
 * @param {Boolean} [options.leading=false] - The function is executed at the beginning (first call).
 * @param {Number} [options.maxWait=false] - the time in milliseconds after that function is executed anyway.
 * @param {Boolean} [options.trailing=true] - The function will be executed at the end (last call, maybe deferred).
 * @returns {FunctionDebouncer} Returns the new debounced function.
 * @example <caption>avoid costly calculation while the window size is in flux</caption>
 *
 * // avoid costly calculation while the window size is in flux
 * window.addEventListener('resize', debounce(calculateLayout, 150));
 *
 * function calculateLayout() {
 *  // do heavy stuff here, triggering Reflow, Relayout, Repaint...
 * }
 *
 * @example <caption>ensure `mousemove` is invoked after 1 second of debounced calls</caption>
 *
 * // ensure `mousemove` is invoked after 1 second of debounced calls
 * document.body.addEventListener('mousemove', debounce(mousemove, 250, { maxWait: 1000}));
 *
 * function mousemove(event) {
 *  // do heavy stuff here
 * }
 */

function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$leading = _ref.leading,
      leading = _ref$leading === undefined ? false : _ref$leading,
      _ref$trailing = _ref.trailing,
      trailing = _ref$trailing === undefined ? true : _ref$trailing,
      _ref$maxWait = _ref.maxWait,
      maxWait = _ref$maxWait === undefined ? false : _ref$maxWait;

  var args = void 0;
  var timeoutId = void 0;
  var maxTimeoutId = void 0;
  var result = void 0;
  var leadingCalled = false;

  // cache flags
  var waitFlag = wait !== maxWait;
  var maxWaitFlag = maxWait !== false;

  /**
   * This will be the returned debounced function
   * @function
   */
  function debounced() {
    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    // cash stuff in closure
    args = rest;

    if (waitFlag) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(delayed, wait);
    }

    if (maxWaitFlag && !maxTimeoutId) {
      maxTimeoutId = setTimeout(maxDelayed, maxWait);
    }

    if (leading && !leadingCalled) {
      leadingCalled = true;
      result = func.apply(undefined, babelHelpers.toConsumableArray(args));
    }

    return result;
  }

  /**
   * Call this to flush the debounced function
   * @function
   */
  debounced.flush = flush;
  /**
   * Call this to cancel the debounced function from being executed
   * @function
   */
  debounced.cancel = cancel;

  return debounced;

  /**
   * This function gets called after [wait] ms have elapsed
   * @private
   */
  function delayed() {
    if (maxTimeoutId) {
      clearTimeout(maxTimeoutId);
    }

    complete();
  }

  /**
   * This function gets called after [maxWait] ms have elapsed
   * @private
   */
  function maxDelayed() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    complete();
  }

  /**
   * This function gets called after [wait] or [maxWait] ms have elapsed
   * and will trigger debounced function, if [trailing=true]
   * @private
   */
  function complete() {
    if (trailing) {
      result = func.apply(undefined, babelHelpers.toConsumableArray(args));
    }

    timeoutId = null;
    maxTimeoutId = null;

    leadingCalled = false;
  }

  /**
   * Flush debounced function and cancel afterwards
   * @private
   */
  function flush() {
    if (timeoutId || maxTimeoutId) {
      result = func.apply(undefined, babelHelpers.toConsumableArray(args));
    }

    cancel();

    return result;
  }

  /**
   * Cancel execution of debounced function and cleanup
   * @private
   */
  function cancel() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    if (maxTimeoutId) {
      clearTimeout(maxTimeoutId);
      maxTimeoutId = null;
    }

    args = undefined;
    leadingCalled = false;
  }
}

export default debounce;