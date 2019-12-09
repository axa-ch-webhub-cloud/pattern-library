/**
 * This is a helper function that prefixes css classes in javascript.
 *
 * @param {string} selector: Selector being passed, e.g. '.m-datepicker .m-datepicker__check:after'
 * @param {object} componentInfo: Object containing componentName and prefixes
 */
export default function prefixSass(selector, componentInfo) {
  const splitSelectors = selector.split('.');
  const prefixedSelectors = [];
  for (let i = 0; i < splitSelectors.length; ++i) {
    if (
      splitSelectors[i].startsWith(componentInfo.standardComponentClassPrefix)
    ) {
      prefixedSelectors.push(`.${componentInfo.prefix}_${splitSelectors[i]}`);
    }
    // ".a-button".split('.') == ["", "a-button"]
    // "a-button" was initially a class because there is an empty string in the
    // previous place of the array. So if 'i' would be 0, the empty string
    // would not be there.
    else if (i !== 0) {
      prefixedSelectors.push(`.${splitSelectors[i]}`);
    }
    // "axa-button".split('.') == ["axa-button"]
    // There is only one element in the array, which means there was no '.' in
    // the initial string, which leads to the conclusion that the element is a
    // tag.
    else {
      prefixedSelectors.push(splitSelectors[i]);
    }
  }
  return prefixedSelectors.join('');
}
