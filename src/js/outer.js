function outer(dom, event, func, capture = true) {
  const root = dom.ownerDocument.documentElement;

  root.addEventListener(event, handler, capture);

  return off;

  function off() {
    root.removeEventListener(event, handler, capture);
  }

  function handler(e) {
    const { target } = e;

    if (!dom.contains(target) && dom !== target) {
      func(e);
    }
  }
}

export default outer;
