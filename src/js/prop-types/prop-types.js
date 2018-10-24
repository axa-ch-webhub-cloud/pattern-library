import PropTypes from 'prop-types';

// @todo remove as soon as https://github.com/facebook/prop-types/issues/231 is resolved
function getShim(propType) {
  function shim(...args) {
    return propType(...args);
  }

  // make sure to also shim `isRequired`, etc.
  Object.keys(propType).reduce(shimKeys, propType);

  return shim;
}

function shimKeys(propType, key) {
  propType[key] = getShim(propType[key]);

  return propType;
}

const ReactPropTypes = PropTypes;

Object.keys(ReactPropTypes).reduce(shimKeys, ReactPropTypes);

export default ReactPropTypes;
