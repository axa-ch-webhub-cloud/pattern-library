import val from '@skatejs/val';

const { Event } = window;
// defined values are different from undefined (for properties) or null (for attributes)
const isDefined = value => !(value === undefined || value === null);

const pascalCase = hyphenatedName =>
  hyphenatedName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

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

    // component author explicitly specified a default value for this property?
    // (This allows *all* values as defaults, *including* undefined. The latter is
    // the proper default for 'value' properties in React's controlled-component mode.)
    ceInst[property] =
      'defaultValue' in propertyValue // component author wants full control of their default value?
        ? defaultValue // yes, apply it
        : DEFAULT_VALUE_OF_TYPE.get(type); // no, derive it from general per-type defaults
  });
};

export { applyDefaults };

const distributeProperties = ({ children, ...properties }, componentClass) => {
  // initialize
  const attrs = {};
  const events = {};
  const props = {};
  let map;
  // iterate over all properties
  Object.keys(properties).forEach(name => {
    const isEvent = name.indexOf('on') === 0;
    // apply defaults to appropriately marked properties:
    // default should kick in (mimic ES6-style default logic to be compatible with old React wrappers)?
    if (properties[name] === undefined) {
      // yes, apply it
      const propertyValue = componentClass.properties[name] || {
        type: isEvent && Function,
      };
      const { defaultValue, type = String } = propertyValue;
      properties[name] =
        'defaultValue' in propertyValue // component author wants full control of their default value?
          ? defaultValue // yes, apply it
          : DEFAULT_VALUE_OF_TYPE.get(type); // no, derive it from general per-type defaults
    }

    let value = properties[name];
    // classify property by type to select correct map object
    // (note that unregistered properties are classified as props via undefined, e.g. for className)
    const specialCases = isEvent ? Event : name === 'className' && name;
    const type = specialCases || (componentClass.properties[name] || {}).type;

    switch (type) {
      case Event:
        map = events;
        break;
      case 'className':
      case Array:
      case Object:
      case Function:
        map = props;
        break;
      case Boolean:
        map = attrs;
        value = value ? '' : null; // ''/null: canonicalize Boolean values s.t. val(...) sets or removes the attribute
        break;
      default:
        map = attrs;
    }

    // map property name to value
    map[name] = value;
  });
  return { attrs, events, props, children };
};

export default (createElement, componentClass) => {
  const { tagName } = componentClass;
  const displayName = pascalCase(tagName);

  const reactStatelessComponent = properties => {
    const { attrs, events, props, children } = distributeProperties(
      properties,
      componentClass
    );

    return val(createElement)(
      tagName,
      { isReact: true, attrs, ...props, ...events },
      children
    );
  };

  reactStatelessComponent.displayName = displayName;

  return reactStatelessComponent;
};
