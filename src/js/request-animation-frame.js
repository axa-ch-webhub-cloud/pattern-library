import vendor from './vendor';

const vendorlower = vendor.lowercase;
export const requestAnimationFrame = (function () {
  /* eslint-disable no-shadow */
  let requestAnimationFrame = window.requestAnimationFrame || window[`${vendorlower}RequestAnimationFrame`];

  if (requestAnimationFrame) {
    requestAnimationFrame = requestAnimationFrame.bind(window);
  } else {
    let lastTime = 0;

    requestAnimationFrame = function requestAnimationFrameFake(callback) {
      const currTime = Date.now();
      const timeToCall = Math.max(0, 16 - (currTime - lastTime));

      const id = setTimeout(() => {
        callback(currTime + timeToCall);
      }, timeToCall);

      lastTime = currTime + timeToCall;

      return id;
    };
  }

  return requestAnimationFrame;

  /* eslint-enable no-shadow */
}());
export const cancelAnimationFrame = (function () {
  /* eslint-disable no-shadow */
  let cancelAnimationFrame = window.cancelAnimationFrame
  || window[`${vendorlower}CancelAnimationFrame`]
  || window[`${vendorlower}CancelRequestAnimationFrame`];

  if (cancelAnimationFrame) {
    cancelAnimationFrame = cancelAnimationFrame.bind(window);
  } else {
    cancelAnimationFrame = function cancelAnimationFrameFake(id) {
      clearTimeout(id);
    };
  }

  return cancelAnimationFrame;

  /* eslint-enable no-shadow */
}());

export default {
  requestAnimationFrame,
  cancelAnimationFrame,
};
