/**
 * Provides a fast way to set CSS properties at an Element level.
 *
 * @param {Element} node - Any Element which has associated CSSOM.
 * @param {Object} decls - An object containing all CSS properties to be set.
 */
function css(node, decls) {
  var cssText = [];
  var props = Object.keys(decls);
  var length = props.length;


  for (var i = 0; i < length; ++i) {
    var prop = props[i];

    cssText.push(prop + ':' + decls[prop] + ';');
  }

  node.style.cssText = cssText.join('');
}

export default css;