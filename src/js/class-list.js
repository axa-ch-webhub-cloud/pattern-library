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
 * @param {...String} classNames - One or more CSS class names.
 */
export function add(node, ...classNames) {
  const hasResult = has(node, ...classNames);

  if (hasResult === true) {
    return;
  }

  let classesToAdd = [...classNames];

  if (Array.isArray(hasResult)) {
    classesToAdd = hasResult.reduce(addReducer, []);
  }

  if (classesToAdd) {
    node.className += ` ${classesToAdd.join(' ')}`;
  }
}

function addReducer(classesToAdd, { className, hasClass }) {
  if (!hasClass) {
    classesToAdd.push(className);
  }

  return classesToAdd;
}

/**
 * Checks whether a given `className` is set or not.
 *
 * @param [Element] node - The target element.
 * @param {...String} classNames - One or more CSS class names.
 * @return {Array|Boolean} - Returns Array if at least one class is set and `true` if all are set, else `false`.
 */
export function has(node, ...classNames) {
  const { className: nodeClassName } = node;
  let hasAtLeastOne = false;
  let hasAllClasses = true;

  const hasArray = classNames.map(mapHas);

  return hasAllClasses || hasAtLeastOne ? hasArray : false;

  function mapHas(className) {
    const regexClass = getReClass(className);
    const hasClass = regexClass.test(nodeClassName);

    if (hasClass) {
      hasAtLeastOne = true;
    } else {
      hasAllClasses = false;
    }

    return {
      className,
      hasClass,
    };
  }
}

/**
 * Removes the given `className`.
 *
 * @param [Element] node - The target element.
 * @param {...String} classNames - One or more CSS class names.
 */
export function remove(node, ...classNames) {
  const hasResult = has(node, ...classNames);

  if (hasResult === false) {
    return;
  }

  let classesToRemove = [...classNames];

  if (Array.isArray(hasResult)) {
    classesToRemove = hasResult.reduce(removeReducer, []);
  }

  if (classesToRemove) {
    const { className: nodeClassName } = node;

    node.className = classesToRemove.reduce(removeClassReducer, nodeClassName);
  }
}

function removeReducer(classesToRemove, { className, hasClass }) {
  if (hasClass) {
    classesToRemove.push(className);
  }

  return classesToRemove;
}

function removeClassReducer(nodeClassName, className) {
  const regexClass = getReClass(className, 'g');

  return nodeClassName.replace(regexClass, ' ').replace(regexTrim, ' ');
}

/**
 * Toggles the given `className`.
 *
 * @param [Element] node - The target element.
 * @param {...String} classNames - One or more CSS class names.
 */
export function toggle(node, ...classNames) {
  const hasResult = has(node, ...classNames);
  let classesToAdd = [...classNames];
  let classesToRemove = [...classNames];

  if (Array.isArray(hasResult)) {
    [classesToAdd, classesToRemove] = hasResult.reduce(toggleReducer, [[], []]);
  }

  if (hasResult !== false) {
    remove(node, ...classesToRemove);
  }

  if (hasResult !== true) {
    add(node, ...classesToAdd);
  }
}

function toggleReducer([classesToAdd, classesToRemove], { className, hasClass }) {
  if (hasClass) {
    classesToRemove.push(className);
  } else {
    classesToAdd.push(className);
  }

  return [classesToAdd, classesToRemove];
}

export default {
  add,
  has,
  remove,
  toggle,
};

