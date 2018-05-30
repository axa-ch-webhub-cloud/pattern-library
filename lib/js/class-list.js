import _toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _slicedToArray from 'babel-runtime/helpers/slicedToArray';
var regexTrim = /^\s+|\s{2,}|\s+$/g;

/**
 * Generates a bullet-prove Regex to match a CSS class name.
 *
 * @param {String} className - The CSS class name to match.
 * @param {String} modifier - Any valid Regex modifier
 * @returns {RegExp} - Returns the Regex for a specific class name.
 */
function getReClass(className, modifier) {
  return new RegExp('^' + className + '$|^' + className + '\\s|\\s' + className + '\\s|\\s' + className + '$', modifier);
}

/**
 * Add the given `classNames`.
 *
 * @param [Element] node - The target element.
 * @param {...String} classNames - One or more CSS class names.
 */
export function add(node) {
  for (var _len = arguments.length, classNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    classNames[_key - 1] = arguments[_key];
  }

  var hasResult = has.apply(undefined, [node].concat(classNames));

  if (hasResult === true) {
    return;
  }

  var classesToAdd = [].concat(classNames);

  if (Array.isArray(hasResult)) {
    classesToAdd = hasResult.reduce(addReducer, []);
  }

  if (classesToAdd) {
    node.className += ' ' + classesToAdd.join(' ');
  }
}

function addReducer(classesToAdd, _ref) {
  var className = _ref.className,
      hasClass = _ref.hasClass;

  if (!hasClass) {
    classesToAdd.push(className);
  }

  return classesToAdd;
}

/**
 * Checks whether the given `classNames` are set or not.
 *
 * @param [Element] node - The target element.
 * @param {...String} classNames - One or more CSS class names.
 * @return {Array|Boolean} - Returns Array if at least one class is set and `true` if all are set, else `false`.
 */
export function has(node) {
  var nodeClassName = node.className;

  var hasAtLeastOne = false;
  var hasAllClasses = true;

  for (var _len2 = arguments.length, classNames = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    classNames[_key2 - 1] = arguments[_key2];
  }

  var hasArray = classNames.map(mapHas);

  return hasAllClasses || hasAtLeastOne ? hasArray : false;

  function mapHas(className) {
    var regexClass = getReClass(className);
    var hasClass = regexClass.test(nodeClassName);

    if (hasClass) {
      hasAtLeastOne = true;
    } else {
      hasAllClasses = false;
    }

    return {
      className: className,
      hasClass: hasClass
    };
  }
}

/**
 * Removes the given `classNames`.
 *
 * @param [Element] node - The target element.
 * @param {...String} classNames - One or more CSS class names.
 */
export function remove(node) {
  for (var _len3 = arguments.length, classNames = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    classNames[_key3 - 1] = arguments[_key3];
  }

  var hasResult = has.apply(undefined, [node].concat(classNames));

  if (hasResult === false) {
    return;
  }

  var classesToRemove = [].concat(classNames);

  if (Array.isArray(hasResult)) {
    classesToRemove = hasResult.reduce(removeReducer, []);
  }

  if (classesToRemove) {
    var nodeClassName = node.className;


    node.className = classesToRemove.reduce(removeClassReducer, nodeClassName);
  }
}

function removeReducer(classesToRemove, _ref2) {
  var className = _ref2.className,
      hasClass = _ref2.hasClass;

  if (hasClass) {
    classesToRemove.push(className);
  }

  return classesToRemove;
}

function removeClassReducer(nodeClassName, className) {
  var regexClass = getReClass(className, 'g');

  return nodeClassName.replace(regexClass, ' ').replace(regexTrim, ' ');
}

/**
 * Toggles the given `classNames`.
 *
 * @param [Element] node - The target element.
 * @param {...String} classNames - One or more CSS class names.
 */
export function toggle(node) {
  for (var _len4 = arguments.length, classNames = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    classNames[_key4 - 1] = arguments[_key4];
  }

  var hasResult = has.apply(undefined, [node].concat(classNames));
  var classesToAdd = [].concat(classNames);
  var classesToRemove = [].concat(classNames);

  if (Array.isArray(hasResult)) {
    var _hasResult$reduce = hasResult.reduce(toggleReducer, [[], []]);

    var _hasResult$reduce2 = _slicedToArray(_hasResult$reduce, 2);

    classesToAdd = _hasResult$reduce2[0];
    classesToRemove = _hasResult$reduce2[1];
  }

  if (hasResult !== false) {
    remove.apply(undefined, [node].concat(_toConsumableArray(classesToRemove)));
  }

  if (hasResult !== true) {
    add.apply(undefined, [node].concat(_toConsumableArray(classesToAdd)));
  }
}

function toggleReducer(_ref3, _ref4) {
  var _ref5 = _slicedToArray(_ref3, 2),
      classesToAdd = _ref5[0],
      classesToRemove = _ref5[1];

  var className = _ref4.className,
      hasClass = _ref4.hasClass;

  if (hasClass) {
    classesToRemove.push(className);
  } else {
    classesToAdd.push(className);
  }

  return [classesToAdd, classesToRemove];
}

export default {
  add: add,
  has: has,
  remove: remove,
  toggle: toggle
};