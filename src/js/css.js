function css(node, decls) {
  const css = [];

  for(const prop in decls) {
    css.push(`${prop}:${decls[prop]};`);
  }

  node.style.cssText = css.join('');
}

export default css;
