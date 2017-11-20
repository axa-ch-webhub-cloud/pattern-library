const reTrim = /^\s+|\s{2,}|\s+$/g;

function getReClass(className, modifier) {
  return new RegExp(`^${className}$|^${className}\\s|\\s${className}\\s|\\s${className}$`, modifier);
}

/**
 * Add the given `className`.
 *
 * @param [Element] node - The target element.
 * @param {string} className - A CSS class name.
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
 * @param {string} className - A CSS class name.
 * @return {boolean} - Returns `true` if the given class is set, else `false`.
 */
export function has(node, className) {
  const reClass = getReClass(className);

  return reClass.test(node.className);
}

/**
 * Removes the given `className`.
 *
 * @param [Element] node - The target element.
 * @param {string} className - A CSS class name.
 */
export function remove(node, className) {
  if (has(node, className)) {
    const reClass = getReClass(className, 'g');

    node.className = node.className.replace(reClass, ' ').replace(reTrim, ' ');
  }
}

/**
 * Toggles the given `className`.
 *
 * @param [Element] node - The target element.
 * @param {string} className - A CSS class name.
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

