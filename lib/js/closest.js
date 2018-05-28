import { has } from './class-list';

/**
 * Returns the closest parent by class name.
 *
 * @param {Element} node - The DOM element from which to start traversing parents.
 * @param {String} className - The CSS class name to be matched.
 * @returns {?Element} - Return the closest parent node or `null`.
 */
export default function closest(node, className) {
  var parentNode = node;

  while (parentNode) {
    if (has(parentNode, className)) {
      return parentNode;
    }

    // eslint-disable-next-line prefer-destructuring
    parentNode = parentNode.parentNode;
  }

  return null;
}