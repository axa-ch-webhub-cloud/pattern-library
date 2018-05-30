/**
 * Enumerate all arguments in an object with upper case keys and identical values.
 *
 * @param {ArgumentList} args - Any number of string to enumerify.
 * @returns {{}} - Returns an object enumerating all agruments by upper case keys.
 */
function Enum() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var length = args.length;

  var obj = {};

  for (var i = 0; i < length; ++i) {
    var arg = args[i];

    obj[arg.toUpperCase()] = arg;
  }

  return obj;
}

export default Enum;