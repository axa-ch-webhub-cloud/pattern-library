import vendor from './vendor';

var vendorlower = vendor.lowercase;
export var requestAnimationFrame = function () {
  /* eslint-disable no-shadow */
  var requestAnimationFrame = window.requestAnimationFrame || window[vendorlower + 'RequestAnimationFrame'];

  if (requestAnimationFrame) {
    requestAnimationFrame = requestAnimationFrame.bind(window);
  } else {
    var lastTime = 0;

    requestAnimationFrame = function requestAnimationFrameFake(callback) {
      var currTime = Date.now();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));

      var id = setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);

      lastTime = currTime + timeToCall;

      return id;
    };
  }

  return requestAnimationFrame;

  /* eslint-enable no-shadow */
}();
export var cancelAnimationFrame = function () {
  /* eslint-disable no-shadow */
  var cancelAnimationFrame = window.cancelAnimationFrame || window[vendorlower + 'CancelAnimationFrame'] || window[vendorlower + 'CancelRequestAnimationFrame'];

  if (cancelAnimationFrame) {
    cancelAnimationFrame = cancelAnimationFrame.bind(window);
  } else {
    cancelAnimationFrame = function cancelAnimationFrameFake(id) {
      clearTimeout(id);
    };
  }

  return cancelAnimationFrame;

  /* eslint-enable no-shadow */
}();

export default {
  requestAnimationFrame: requestAnimationFrame,
  cancelAnimationFrame: cancelAnimationFrame
};