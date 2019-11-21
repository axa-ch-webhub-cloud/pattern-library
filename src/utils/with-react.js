import val from '@skatejs/val';

// if a prop is not set, its type is null. safer take null and undefined as a falsy value
// but accept empty string or 0 as truly value
const isUndefined = value => value === undefined || value === null;

// we can set a default type for defaultType based on its type. For this purpose
// we create a map
const DEFAULT_VALUE_OF_TYPE = {
  string: '',
  boolean: false,
  function: () => {}
};


const applyDefaults = customElementInstance => {
  const {
    constructor: { properties },
  } = customElementInstance;
  // get all properties of the custom element and loop over each key
  Object.keys(properties).forEach(property => {
    // extract default value and property type found in the name of the Type
    const { defaultValue, type: { name } } = properties[property];

    // if no defaultValue is set, try to calculate it ourself
    if (!isUndefined(defaultValue)) {
      customElementInstance[property] = defaultValue;
    } else {
      const typeDefaultValue = DEFAULT_VALUE_OF_TYPE[name.toLowerCase()];
      customElementInstance[property] = isUndefined(typeDefaultValue) ? '' : typeDefaultValue;
    }
  });
};

export { applyDefaults };

export default createElement => val(createElement);
