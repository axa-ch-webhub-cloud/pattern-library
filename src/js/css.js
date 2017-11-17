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
