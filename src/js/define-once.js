/* globals customElements */

export default function defineOnce(tagName, ctor) {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, ctor);
  }
}
