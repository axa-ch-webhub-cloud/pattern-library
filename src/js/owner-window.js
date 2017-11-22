function ownerWindow(node) {
  const { ownerDocument } = node;

  return ownerDocument.defaultView || ownerDocument.parentWindow;
}

export default ownerWindow;
