import PropTypes from 'prop-types';

// @todo remove as soon as https://github.com/facebook/prop-types/issues/231 is resolved
function getShim(propType) {
  function shim(...args) {
    return propType(...args);
  }

  // make sure to also shim `isRequired`, etc.
  Object.keys(propType)
    .map((key) => {
      shim[key] = propType[key];

      return key;
    })
    .reduce(shimKeys, shim);

  return shim;
}

function shimKeys(propTypes, key) {
  const propType = propTypes[key];

  if (typeof propType === 'function') {
    propTypes[key] = getShim(propType);
  }

  return propTypes;
}

const ReactPropTypes = PropTypes;

Object.keys(ReactPropTypes).reduce(shimKeys, ReactPropTypes);

export default ReactPropTypes;
