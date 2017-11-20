import classList from './class-list'
import { freeByValue } from "./free";

function on(node, eventName, className, func, capture = false) {
  const typeClassName = typeof className
  const isDelegated = typeClassName === 'string'

  if (typeClassName === 'function') {
    capture = !!func;
    func = className;
  }

  const handler = isDelegated ? delegate : func;

  node.addEventListener(eventName, handler, capture);

  return off;

  function off() {
    node.removeEventListener(eventName, handler, capture);

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
