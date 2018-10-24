import PropTypes from 'prop-types';

// @todo remove as soon as https://github.com/facebook/prop-types/issues/231 is resolved
function getShim(propType) {
  function shim(...args) {
    return propType(...args);
  }

  // guard cyclic refs causing max call stack errors
  shim.__isShimmed = true;

  // make sure to also shim `isRequired`, etc.
  Object.keys(propType).reduce(shimKeys, propType);

  return shim;
}

function shimKeys(propTypes, key) {
  const propType = propTypes[key];

  if (!propType.__isShimmed) {
    propTypes[key] = getShim(propType);
  }

  return propTypes;
}

const ReactPropTypes = PropTypes;

Object.keys(ReactPropTypes).reduce(shimKeys, ReactPropTypes);

export default ReactPropTypes;
