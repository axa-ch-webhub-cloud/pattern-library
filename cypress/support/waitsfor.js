const WAIT_TIME = 3900; // 10ms less than cypress :)
const RETRY_INTERVAL_TIME = 10;

function catchRejection(done) {
  return function(err) {
    throw err;
  };
}

function waitsFor(f, options = {}) {
  var func = f, // this function returns true when promise is fufilled
    intervalTime = options.interval || RETRY_INTERVAL_TIME; // optional interval

  return new Promise(function(fufill, reject) {
    var interval = setInterval(function() {
      if (func()) {
        clearTimeout(timeout);
        clearInterval(interval);
        fufill();
      }
    }, intervalTime);

    var timeout = setTimeout(function() {
      clearInterval(interval);
      reject(new Error(`Timed out retrying: ${options.message || ''}`));
    }, options.timeout || WAIT_TIME);
  });
}

export { waitsFor, catchRejection };
