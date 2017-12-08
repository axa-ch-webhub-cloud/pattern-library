import { has } from './class-list';

export default function closest(node, className) {
  let parentNode = node;

  while (parentNode) {
    if (has(parentNode, className)) {
      return parentNode;
    }

    // eslint-disable-next-line prefer-destructuring
    parentNode = parentNode.parentNode;
  }

  return null;
}
