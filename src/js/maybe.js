export const noop = () => {};
export const toEqual = (value, toBe) => value === toBe;

// eslint-disable-next-line no-confusing-arrow
const maybe = fn => comparison => (...values) => (...toBes) => (...args) => comparison(...[...values, ...toBes]) ?
  fn(...args) :
  noop();

export default maybe;
