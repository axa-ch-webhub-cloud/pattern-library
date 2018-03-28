const regexJson = /^\s*(?:true|false|null|undefined|-?[0-9]+\.?[0-9]*|[[{](?:.|[\r\n])*[\]}])\s*$/;

/**
 * Try to parse a string value by `JSON.parse`.
 *
 * @param {String} value - The string to parse.
 * @param {String} [name] - Normally an attribute's name.
 * @returns {*} - Returns the value of the string - in case of valid JSON the result of `JSON.parse` else plain text.
 */
function toProp(value, name) {
  let newValue = value;

  if (!value || name === value) {
    newValue = true;
  } else if (regexJson.test(value)) {
    try {
      newValue = JSON.parse(value);
    } catch (error) {
      // eslint-disable-next-line
      console.error(`Attribute ${name} has an error:\n${error}\n`, value);
    }
  }

  return newValue;
}

export default toProp;
