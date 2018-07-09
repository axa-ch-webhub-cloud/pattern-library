/* globals customElements */

export default function defineOnce(tagName, ctor) {
  if (!customElements.get(tagName)) {
    // TODO: Remove event when issues/515 is fixed
    window.addEventListener('DOMContentLoaded', () => {
      customElements.define(tagName, ctor);
    });
  }
}
