/**
 * Specify a function to execute when the DOM and WebComponent APIs are fully loaded.
 *
 * @param {Function} cb - A function to execute after the DOM and WebComponent APIs are ready.
 */
const wcdomready = (cb) => {
  let usage = 0;
  const once = (...args) => {
    if (usage === 0) {
      try {
        cb(...args);
        usage += 1;
        document.removeEventListener('DOMContentLoaded');
        document.removeEventListener('WebComponentsReady');
      } catch (err) { /* console.log(err); */ }
    }
  };
  document.addEventListener('DOMContentLoaded', once, false);
  document.addEventListener('WebComponentsReady', once, false);
};

export default wcdomready;
