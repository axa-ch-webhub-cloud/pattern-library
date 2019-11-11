export default (array, predicate, self = null) => {
  // for all array elements
  for (let i = 0, n = array.length; i < n; i++) {
    // if predicate returns a truthy value when applied to current array element...
    if (predicate.call(self, array[i], i, array)) {
      // return its index
      return i;
    }
  }
  // return failure index
  return -1;
};
