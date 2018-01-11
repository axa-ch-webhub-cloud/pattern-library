export const noop = () => {};
export const toEqual = (value, toBe) => value === toBe;

const maybe = fn => comparison => (...values) => (...toBes) => (...args) => comparison(...[...values, ...toBes]) ? fn(...args) : noop();

export default maybe;
