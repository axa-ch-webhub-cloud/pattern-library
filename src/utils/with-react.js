import val from './val';
import { defineVersioned } from './component-versioning';

const pascalCase = hyphenatedName =>
  hyphenatedName
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

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
