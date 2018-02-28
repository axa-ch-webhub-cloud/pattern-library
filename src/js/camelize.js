const regexSeparator = /[-_]+/g;

/**
 * Camelcase any given string.
 *
 * @link https://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
 * @param {String} string - The string to be camel-cased.
 * @returns {String} - Returns camel-cased string.
 */
function camelize(string) {
  return string.replace(regexSeparator, replaceCase);
}

function replaceCase(match, index) {
  if (regexSeparator.test(match)) {
    return '';
  }

  return index === 0 ? match.toLowerCase() : match.toUpperCase();
}

export default camelize;
