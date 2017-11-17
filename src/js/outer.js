function outer(node, eventName, func, capture = true) {
  const root = node.ownerDocument.documentElement;

  root.addEventListener(eventName, handler, capture);

  return off;

  function off() {
    root.removeEventListener(eventName, handler, capture);
  }

  function handler(e) {
    const { target } = e;

    if (!node.contains(target) && node !== target) {
      func(e);
    }
  }
}

export default outer;
