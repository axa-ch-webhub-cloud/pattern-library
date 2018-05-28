/**
 * Delete property of given object by key.
 *
 * @param {Object} object - The object to search for matching properties.
 * @param {String} name - The key to be garbage collected.
 * @returns {Boolean} - Returns `true` if deletion was successful, else `false`.
 */
export function free(object, name) {
  // @TODO: may this should throw an error
  if (!object) {
    return false;
  }

  if (name in object) {
    return delete object[name];
  }

  return false;
}

/**
 * Delete property of given object by value.
 *
 * @param {Object} object - The object to search for matching properties.
 * @param {Any} value - The value to be garbage collected.
 * @returns {Boolean} - Returns `true` if deletion was successful, else `false`.
 */
export function freeByValue(object, value) {
  // @TODO: may this should throw an error
  if (!object) {
    return false;
  }

  var keys = Object.keys(object);
  var length = keys.length;


  for (var i = 0; i < length; ++i) {
    var key = keys[i];
    if (object[key] === value) {
      return delete object[key];
    }
  }

  return false;
}

export default {
  free: free,
  freeByValue: freeByValue
};