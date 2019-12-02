import val from '@skatejs/val';

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
  const props = {};
  let map;
  // iterate over all properties
  Object.keys(properties).forEach(name => {
    let value = properties[name];
    // classify property by type to select correct map object
    // (note that unregistered properties are classified as attr(ibute)s via their undefined .type)
    const event = name.indexOf('on') === 0 && Function; // Function if onXXX event name, false otherwise
    const className = name === 'className' && name;
    const defaultType = { type: event };
    const declaredType = (componentClass.properties[name] || defaultType).type;
    const type = event || className || declaredType;

    switch (type) {
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
  return { attrs, props, children };
};

export default (createElement, componentClass) => {
  const { tagName } = componentClass;
  const displayName = pascalCase(tagName);

  const reactStatelessComponent = properties => {
    const { attrs, props, children } = distributeProperties(
      properties,
      componentClass
    );

    return val(createElement)(
      tagName,
      { isReact: true, attrs, ...props },
      children
    );
  };

  reactStatelessComponent.displayName = displayName;

  return reactStatelessComponent;
};
