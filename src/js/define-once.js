export default function defineOnce(tagName, ctor, options) {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, ctor, options);
  }
}
