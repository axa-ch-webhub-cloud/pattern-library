var regexWord = /(?:^\w|[A-Z]|\b\w|\s+|[-_]+)/g;
var regexSeparator = /[-_]+/g;

/**
 * Camelcase any given string.
 *
 * @link https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
 * @param {String} string - The string to be camel-cased.
 * @returns {String} - Returns camel-cased string.
 */
function camelize(string) {
  return string.replace(regexWord, replaceCase);
}

function replaceCase(match, index) {
  if (+match === 0 || regexSeparator.test(match)) {
    return ''; // or if (/\s+/.test(match)) for white spaces
  }

  return index === 0 ? match.toLowerCase() : match.toUpperCase();
}

export default camelize;