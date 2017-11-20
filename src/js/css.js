/**
 * Provides a fast way to set CSS properties at an Element level.
 *
 * @param {Element} node - Any Element which has associated CSSOM.
 * @param {Object} decls - An object containing all CSS properties to be set.
 */
function css(node, decls) {
  const css = [];
  const props = Object.keys(decls);
  const length = props.length;

  for(let i=0; i<length; ++i) {
    const prop = props[i];

    css.push(`${prop}:${decls[prop]};`);
  }

  node.style.cssText = css.join('');
}

export default css;
