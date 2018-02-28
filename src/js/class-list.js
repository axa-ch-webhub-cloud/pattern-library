const regexTrim = /^\s+|\s{2,}|\s+$/g;

/**
 * Generates a bullet-prove Regex to match a CSS class name.
 *
 * @param {String} className - The CSS class name to match.
 * @param {String} modifier - Any valid Regex modifier
 * @returns {RegExp} - Returns the Regex for a specific class name.
 */
function getReClass(className, modifier) {
  return new RegExp(`^${className}$|^${className}\\s|\\s${className}\\s|\\s${className}$`, modifier);
}

/**
 * Add the given `className`.
 *
 * @param [Element] node - The target element.
 * @param {String} className - A CSS class name.
 */
export function add(node, className) {
  if (!has(node, className)) {
    node.className += ` ${className}`;
  }
}

/**
 * Checks whether a given `className` is set or not.
 *
 * @param [Element] node - The target element.
 * @param {String} className - A CSS class name.
 * @return {Boolean} - Returns `true` if the given class is set, else `false`.
 */
export function has(node, className) {
  const regexClass = getReClass(className);

  return regexClass.test(node.className);
}

/**
 * Removes the given `className`.
 *
 * @param [Element] node - The target element.
 * @param {String} className - A CSS class name.
 */
export function remove(node, className) {
  if (has(node, className)) {
    const regexClass = getReClass(className, 'g');

    node.className = node.className.replace(regexClass, ' ').replace(regexTrim, ' ');
  }
}

/**
 * Toggles the given `className`.
 *
 * @param [Element] node - The target element.
 * @param {String} className - A CSS class name.
 */
export function toggle(node, className) {
  if (has(node, className)) {
    remove(node, className);
  } else {
    add(node, className);
  }
}

export default {
  add,
  has,
  remove,
  toggle,
};

