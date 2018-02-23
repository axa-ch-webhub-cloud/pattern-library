/**
 *
 * @param cb
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
