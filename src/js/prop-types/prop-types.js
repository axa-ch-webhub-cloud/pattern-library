import PropTypes from 'prop-types';

// @todo remove as soon as https://github.com/facebook/prop-types/issues/231 is resolved
function getShim(propType, deeper = true) {
  function shim(...args) {
    return propType(...args);
  }

  // guard cyclic refs causing max call stack errors
  if (deeper) {
    // make sure to also shim `isRequired`, etc.
    Object.keys(propType).reduce(shimKeys, propType);
  }

  return shim;
}

function shimKeys(propTypes, key) {
  const propType = propTypes[key];

  if (typeof propType === 'function') {
    propTypes[key] = getShim(propTypes[key], false);
  }

  return propTypes;
}

const ReactPropTypes = PropTypes;

Object.keys(ReactPropTypes).reduce(shimKeys, ReactPropTypes);

export default ReactPropTypes;
