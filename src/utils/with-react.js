import val from '@skatejs/val';

// if a prop is not set, its type is null. safer take null and undefined as a falsy value
// but accept empty string or 0 as truly value
const isUndefined = value => value === undefined || value === null;

const applyDefaults = self => {
  const {
    constructor: { properties },
  } = self;
  Object.keys(properties).forEach(property => {
    const { defaultValue } = properties[property];
    if (!isUndefined(defaultValue)) {
      self[property] = defaultValue;
    }
  });
};

const distributeProperties = ({ children, ...props }, componentClass) => {
  const attrs = {};
  const events = {};
  Object.keys(props).forEach(name => {
    // apply defaults to appropriately marked props
    const value = componentClass.properties[name].defaultValue || undefined;
    if (!isUndefined(value) && !isUndefined(props[name])) {
      props[name] = value;
    }
    // FIXME: might be better to detect eventhood via Function constructor?!
    const isEvent = name.indexOf('on') === 0;
    (isEvent ? events : attrs)[name] = props[name];
  });
  return { attrs, events, children };
};

export default (createElement, componentClass) => props => {
  const { attrs, events, children } = distributeProperties(
    props,
    componentClass
  );

  return val(createElement)(
    componentClass.tagName,
    {
      attrs,
      ...events,
    },
    children
  );
};

export { applyDefaults };
