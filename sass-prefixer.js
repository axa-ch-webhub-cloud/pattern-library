export default function prefixSass(prefX, selector, componentInfo) {
  const splitSelectors = selector.split('.');
  const secondArray = [];
  for (let i = 0; i < splitSelectors.length; ++i) {
    if (
      splitSelectors[i].startsWith(componentInfo.standardComponentClassPrefix)
    ) {
      secondArray.push(`.${prefX}_${splitSelectors[i]}`);
      // If index is null, that means there was no empty string
      // before, which means it was not a tag but a class and needs
      // to be labeled as such.
    } else if (i !== 0) {
      secondArray.push(`.${splitSelectors[i]}`);
    } else {
      secondArray.push(splitSelectors[i]);
    }
  }
  return secondArray.join('');
}
