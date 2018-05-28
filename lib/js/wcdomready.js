/**
 * Specify a function to execute when the DOM and WebComponent APIs are fully loaded.
 *
 * @param {Function} cb - A function to execute after the DOM and WebComponent APIs are ready.
 */
var wcdomready = function wcdomready(cb) {
  var usage = 0;
  var once = function once() {
    if (usage === 0) {
      try {
        cb.apply(undefined, arguments);
        usage += 1;
        document.removeEventListener('DOMContentLoaded');
        document.removeEventListener('WebComponentsReady');
      } catch (err) {/* console.log(err); */}
    }
  };
  document.addEventListener('DOMContentLoaded', once, false);
  document.addEventListener('WebComponentsReady', once, false);
};

export default wcdomready;