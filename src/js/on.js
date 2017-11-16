import classList from './class-list'

function on(dom, event, className, func, capture = false) {
  dom.addEventListener(event, delegate, capture);

  return off;

  function off() {
    dom.removeEventListener(event, delegate, capture);
  }

  function delegate(e) {
    let { target } = e;

    while (!classList.has(target, className) && target !== dom) {
      target = target.parentNode;
    }

    if (target !== dom) {
      return func(e, target);
    }
  }
}

export default on
