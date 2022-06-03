// defined values are different from undefined (for properties) or null (for attributes)
const isDefined = value => !(value === undefined || value === null);

// generic defaults (will be applied in the absence of explicit 'defaultValue')
// (IE11 does not support new Map([iterable]), so we have to initialize the map
// with .set calls for each key)
const DEFAULT_VALUE_OF_TYPE = new Map();
[
  [String, ''],
  [Boolean, false],
  [Object, {}],
  [Array, []],
  [Number, 0],
  [Function, () => {}],
].forEach(([key, value]) => {
  DEFAULT_VALUE_OF_TYPE.set(key, value);
});

const emptyFunction = () => {};

// convert *attribute* value
const convert = (value, type) => {
  if (type === Number) {
    return parseFloat(value);
  }
  if (type === Function) {
    // corner case: inline event handlers like onchange="alert(event)" cannot be reliably converted from string,
    // so just return an empty function s.t.  event-handler invocations in component code don't throw exceptions
    // (components are responsible for firing synthetic events on their root element instead to trigger expected
    // inline event handlers)
    return emptyFunction;
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

    // otherwise, apply default

    // make sure the set value() function is never triggered when defaultValue
    // is undefined otherwise the isControlled flag and firstTime flag are messed up in
    // some components containing controlledness. Writing undefined again on value counts as change
    if (defaultValue === undefined && 'defaultValue' in propertyValue) {
      return;
    }

    // component author explicitly specified a default value for this property?
    // (This allows *all* values as defaults, *including* undefined. The latter is
    // the proper default for 'value' properties in React's controlled-component mode.)
    // no, derive it from general per-type defaults
    ceInst[property] =
      'defaultValue' in propertyValue // component author wants full control of their default value?
        ? defaultValue // yes, apply it
        : DEFAULT_VALUE_OF_TYPE.get(type);
  });
};

export default applyDefaults;
