const debounce = function debounce(func, wait = 0, { leading = false, trailing = true, maxWait = false } = {}) {
  let args;
  let timeoutId;
  let maxTimeoutId;
  let result;
  let leadingCalled = false;

  // cache flags
  const waitFlag = wait !== maxWait;
  const maxWaitFlag = maxWait !== false;

  /**
   * This will be the returned debounced function
   * @function
   */
  function debounced(...rest) {
    // cache stuff in closure
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
      result = func(...args);
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
   * and will trigger the debounced function, if [trailing=true]
   * @private
   */
  function complete() {
    if (trailing) {
      result = func(...args);
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
      result = func(...args);
    }

    cancel();

    return result;
  }

  /**
   * Cancel execution of debounced function and clean up
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
};

export default debounce;
