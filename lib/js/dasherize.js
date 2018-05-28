var regexUpperCaseLetter = /[A-Z]/g;

/**
 * Dasherize any given string.
 *
 * @param {String} string - The string to be dash-cased.
 * @returns {String} - Returns dash-cased string.
 */
function dasherize(string) {
  return string.replace(regexUpperCaseLetter, replace);
}

function replace(match, offset, string) {
  var lower = match.toLowerCase();
  var next = string.charAt(offset + 1);

  if (offset === 0 || next.toUpperCase() === next) {
    return lower;
  }

  return "-" + lower;
}

export default dasherize;