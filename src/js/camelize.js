const reWord = /(?:^\w|[A-Z]|\b\w)/g;

/**
 * Camelcase any given string.
 *
 * @param {String} string - The string to be camel-cased.
 * @returns {String} - Returns camel-cased string.
 */
function camelize(string) {
  return string.replace(reWord, replaceCase);
}

function replaceCase(match, index) {
  if (+match === 0) {
    return ''; // or if (/\s+/.test(match)) for white spaces
  }

  return index === 0 ? match.toLowerCase() : match.toUpperCase();
}

export default camelize;
