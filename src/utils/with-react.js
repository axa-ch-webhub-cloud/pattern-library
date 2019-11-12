import val from '@skatejs/val';

const applyDefaults = self => {
  const {
    constructor: { properties },
  } = self;
  Object.keys(properties).forEach(property => {
    const { defaultValue } = properties[property];
    if (defaultValue !== undefined) {
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
    if (value !== undefined && props[name] === undefined) {
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
