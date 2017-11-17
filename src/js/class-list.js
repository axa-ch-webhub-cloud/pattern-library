const reTrim = /^\s+|\s{2,}|\s+$/g;

function getReClass(className, modifier) {
  return new RegExp(`^${className}$|^${className}\\s|\\s${className}\\s|\\s${className}$`, modifier);
}

export function add(node, className) {
  if (!has(node, className)) {
    node.className += ` ${className}`;
  }
}

export function has(node, className) {
  const reClass = getReClass(className);

  return reClass.test(node.className);
}

export function remove(node, className) {
  if (has(node, className)) {
    const reClass = getReClass(className, 'g');

    node.className = node.className.replace(reClass, ' ').replace(reTrim, ' ');
  }
}

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
  toggle
};

