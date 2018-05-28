/**
 * Infers the applicable vendor prefixes for DOM, CSS and JS.
 *
 * @type {{dom, lowercase, css, js}}
 */
var vendor = function () {
  if (!window.getComputedStyle) return null;

  var styles = window.getComputedStyle(document.documentElement, '');
  var regexVendorPrefix = /-(moz|webkit|ms)-/;
  var prefix = (Array.prototype.slice.call(styles).join('').match(regexVendorPrefix) || styles.OLink === '' && ['', 'o'])[1];

  var dom = 'WebKit|Moz|MS|O'.match(new RegExp('(' + prefix + ')', 'i'))[1];

  return {
    dom: dom,
    lowercase: prefix,
    css: '-' + prefix + '-',
    js: prefix[0].toUpperCase() + prefix.slice(1)
  };
}();

export default vendor;