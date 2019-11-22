import val from '@skatejs/val';

// if a prop is not set, its type is null. safer take null and undefined as a falsy value
// but accept empty string or 0 as truly value
const isUndefined = value => value === undefined || value === null;

// we can set a default type for defaultType based on its type. For this purpose
// we create a map
const DEFAULT_VALUE_OF_TYPE = {
  string: '',
  boolean: false,
  object: {},
  array: [],
  number: 0,
  function: () => {},
};

const applyDefaults = ceInst => {
  const {
    constructor: { properties },
  } = ceInst;
  // get all properties of the custom element and loop over each key
  Object.keys(properties).forEach(property => {
    // extract default value and property type found in the name of the Type
    const { type, converter } = properties[property];

    if (!type && !converter) {
      throw new Error(`
          A type must always be set in the properties of the Custom Element!

          It seems that the property ${property} has no type. It should belong to
          ${ceInst.nodeName}
        `);
    }

    let { defaultValue } = properties[property];

    if (type) {
      const { name } = type;

      // make sure no default value was set before WC was defined. If so, use that one
      let value = '';
      if (!ceInst.isReact) {
        value = ceInst.getAttribute(name);
      }
      if (!isUndefined(value)) {
        defaultValue = value;
      }

      // if no defaultValue is set, try to calculate it ourself
      if (!isUndefined(defaultValue)) {
        ceInst[property] = defaultValue;
      } else {
        const typeDefaultValue = DEFAULT_VALUE_OF_TYPE[name.toLowerCase()];
        ceInst[property] = isUndefined(typeDefaultValue)
          ? ''
          : typeDefaultValue;
      }
    }
  });
};

export { applyDefaults };

export default createElement => val(createElement);
