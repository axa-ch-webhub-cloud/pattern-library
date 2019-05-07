function isDocumentFragment(value) {
  return Object.prototype.toString.call(value).indexOf('DocumentFragment') !== -1;
}

export default isDocumentFragment;
