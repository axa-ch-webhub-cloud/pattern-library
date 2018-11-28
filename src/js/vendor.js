/**
 * Infers the applicable vendor prefixes for DOM, CSS and JS.
 *
 * @type {{dom, lowercase, css, js}}
 */

/* eslint-disable func-names */
const vendor = (function () {
  if (!window.getComputedStyle) return null;

  const styles = window.getComputedStyle(document.documentElement, '');
  const regexVendorPrefix = /-(moz|webkit|ms)-/;
  const prefix = (Array.prototype.slice.call(styles).join('').match(regexVendorPrefix) || (styles.OLink === '' && ['', 'o']))[1];

  const dom = ('WebKit|Moz|MS|O').match(new RegExp(`(${prefix})`, 'i'))[1];

  return {
    dom,
    lowercase: prefix,
    css: `-${prefix}-`,
    js: prefix[0].toUpperCase() + prefix.slice(1),
  };
}());

export default vendor;
