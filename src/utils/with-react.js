import val from '@skatejs/val';
import { defineVersioned } from './component-versioning';

// defined values are different from undefined (for properties) or null (for attributes)
const isDefined = value => !(value === undefined || value === null);

const pascalCase = hyphenatedName =>
  hyphenatedName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

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

export { applyDefaults };

const transformStylesObjectToString = value => {
  // {width: "500px"} -> width:500px;
  const styleString = Object.keys(value).reduce((prev, curr) => {
    let previousValue = prev;
    return `${(previousValue += curr
      .split(/(?=[A-Z])/)
      .join('-')
      .toLowerCase())}:${value[curr]};`;
  }, '');
  return styleString;
};

const distributeProperties = (properties, componentClass) => {
  // initialize
  const attrs = {};
  const props = {};
  let map;
  // iterate over all properties
  Object.keys(properties).forEach(name => {
    const value = properties[name];
    // classify property by type to select correct map object
    // (note that unregistered properties are classified as attr(ibute)s via their undefined .type)
    let type;
    const declaredProperty = componentClass.properties[name] || {};
    const { type: declaredType } = declaredProperty;
    const looksLikeAnEventHandler =
      name.indexOf('on') === 0 && // starts with on...
      name.charAt(2) === name.charAt(2).toUpperCase(); // continues with uppercase-letter, i.e. camelCase

    if (looksLikeAnEventHandler) {
      type = Function;
    } else if (name === 'className') {
      type = 'className';
    } else {
      type = declaredType;
    }

    switch (type) {
      case 'className':
      case Array:
      case Object:
      case Function:
      case Boolean:
        map = props;
        break;
      default:
        map = declaredType ? props : attrs;
    }

    // map property name to value *unless* value is undefined
    if (value !== undefined) {
      if (name === 'style') {
        map[name] = transformStylesObjectToString(value);
      } else {
        map[name] = value;
      }
    }
  });
  return { attrs, props };
};

export default (createElement, componentClass, version) => {
  const { tagName } = componentClass;
  const finalTagName = version
    ? defineVersioned([componentClass], version)
    : tagName;
  const displayName = pascalCase(finalTagName);

  const reactStatelessComponent = ({ children, ...properties }) => {
    const { attrs, props } = distributeProperties(properties, componentClass);
    return val(createElement)(
      finalTagName,
      { isReact: true, attrs, ...props },
      children
    );
  };

  // displayName is important for React testing (e.g. enzyme) and Chrome DevTools plugins
  reactStatelessComponent.displayName = displayName;

  return reactStatelessComponent;
};
