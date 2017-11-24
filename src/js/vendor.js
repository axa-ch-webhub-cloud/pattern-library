const vendor = (function () {
  if (!window.getComputedStyle) return null;

  const styles = window.getComputedStyle(document.documentElement, '');
  const reVendorPrefix = /-(moz|webkit|ms)-/;
  const prefix = (Array.prototype.slice.call(styles).join('').match(reVendorPrefix) || (styles.OLink === '' && ['', 'o']))[1];

  const dom = ('WebKit|Moz|MS|O').match(new RegExp(`(${prefix})`, 'i'))[1];

  return {
    dom,
    lowercase: prefix,
    css: `-${prefix}-`,
    js: prefix[0].toUpperCase() + prefix.slice(1),
  };
}());

export default vendor;
