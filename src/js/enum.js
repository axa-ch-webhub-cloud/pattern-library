/**
 * Enumerate all arguments in an object with upper case keys and identical values.
 *
 * @param {ArgumentList} args - Any number of string to enumerify.
 * @returns {{}} - Returns an object enumerating all agruments by upper case keys.
 */
function Enum(...args) {
  const length = args.length;
  const obj = {};

  for (let i=0; i<length; ++i) {
    const arg = args[i];

    obj[arg.toUpperCase()] = arg;
  }

  return obj;
}

export default Enum;
