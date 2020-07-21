export default (name, customElementClass) => {
  // normalize name since HTML tag names don't allow case distinction
  const lowerCaseName = name.toLowerCase();
  // custom element not already registered?
  if (!window.customElements.get(lowerCaseName)) {
    // no, register it now
    window.customElements.define(lowerCaseName, customElementClass);
  }
  // return its name as a convenience
  return lowerCaseName;
};
