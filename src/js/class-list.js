const reTrim = /^\s+|\s{2,}|\s+$/g;

function getReClass(className, modifier) {
  return new RegExp(`^${className}$|^${className}\\s|\\s${className}\\s|\\s${className}$`, modifier);
}

export function add(dom, className) {
  if (!has(dom, className)) {
    dom.className += ` ${className}`;
  }
}

export function has(dom, className) {
  const reClass = getReClass(className);

  return reClass.test(dom.className);
}

export function remove(dom, className) {
  if (has(dom, className)) {
    const reClass = getReClass(className, 'g');

    dom.className = dom.className.replace(reClass, ' ').replace(reTrim, ' ');
  }
}

export function toggle(dom, className) {
  if (has(dom, className)) {
    remove(dom, className);
  } else {
    add(dom, className);
  }
}

export default {
  add,
  has,
  remove,
  toggle
};

