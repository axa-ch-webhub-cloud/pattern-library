import val from '@skatejs/val';

// defined values are different from undefined (for properties) or null (for attributes)
const isDefined = value => !(value === undefined || value === null);

// generic defaults (will be applied in the absence of explicit 'defaultValue')
const DEFAULT_VALUE_OF_TYPE = new Map([
  [String, ''],
  [Boolean, false],
  [Object, {}],
  [Array, []],
  [Number, 0],
  [Function, () => {}],
]);

const convert = (value, type) => {
  if (type === Number) {
    return parseFloat(value);
  }
  return type === Array || type === Object ? JSON.parse(value) : value;
};

const applyDefaults = ceInst => {
  const {
    constructor: { properties },
  } = ceInst;
  // get all properties of the custom element and loop over each key
  Object.keys(properties).forEach(property => {
    // extract default value and property type
    const propertyValue = properties[property];
    // component author explicitly specified a default value for this property?
    // (This allows *all* values as defaults, *including* undefined. The latter is
    // the proper default for 'value' properties in React's controlled-component mode.)
    const hasDefaultValue = 'defaultValue' in propertyValue;
    const { type, converter, defaultValue } = propertyValue;

    if (!type) {
      if (!converter) {
        throw new Error(
          `<${ceInst.nodeName}> property "${property}" is missing a type!`
        );
      }
      return;
    }

    // respect property values defined before CE is constructed
    if (!ceInst.isReact) {
      let value = ceInst[property];
      if (isDefined(value)) {
        return;
      }
      // Boolean attributes in HTML are true if present, false otherwise.
      // For all other types, get their value as string...
      value =
        type === Boolean
          ? ceInst.hasAttribute(property)
          : ceInst.getAttribute(property);

      // .. and if defined
      if (isDefined(value)) {
        // convert it
        ceInst[property] = convert(value, type);
        return;
      }
    }
    // otherwise, apply default
    ceInst[property] = hasDefaultValue // component author wants full control of their default value?
      ? defaultValue // yes, apply it
      : DEFAULT_VALUE_OF_TYPE.get(type); // no, derive it from general per-type defaults
  });
};

export { applyDefaults };

export default createElement => val(createElement);
