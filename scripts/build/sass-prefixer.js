export default function prefixSass(prefix, selector, componentInfo) {
  const splitSelectors = selector.split('.');
  const prefixedSelectors = [];
  for (let i = 0; i < splitSelectors.length; ++i) {
    if (
      splitSelectors[i].startsWith(componentInfo.standardComponentClassPrefix)
    ) {
      prefixedSelectors.push(`.${prefix}_${splitSelectors[i]}`);
      // If index is null, that means there was no empty string
      // before, which means it was not a tag but a class and needs
      // to be labeled as such.
    } else if (i !== 0) {
      prefixedSelectors.push(`.${splitSelectors[i]}`);
    } else {
      prefixedSelectors.push(splitSelectors[i]);
    }
  }
  return prefixedSelectors.join('');
}
