export default function defineOnce(name, customElementClass) {
  // custom element not already registered?
  if (!window.customElements.get(name)) {
    // no, register it now
    window.customElements.define(name, customElementClass);
  }
  // return its name as a convenience
  return name;
}
