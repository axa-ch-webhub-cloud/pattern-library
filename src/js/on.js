import classList from './class-list'
import { freeByValue } from "./free";

function on(node, eventName, className, func, capture = false) {
  node.addEventListener(eventName, delegate, capture);

  return off;

  function off() {
    node.removeEventListener(eventName, delegate, capture);

    freeByValue(this, off);
  }

  function delegate(e) {
    let { target } = e;

    while (!classList.has(target, className) && target !== node) {
      target = target.parentNode;
    }

    if (target !== node) {
      return func(e, target);
    }
  }
}

export default on
