import PropTypes from "prop-types";

// guard for Uncaught RangeError: Maximum call stack size exceeded in prod
let level = 0;

// @todo remove as soon as https://github.com/facebook/prop-types/issues/231 is resolved
function getShim(propType) {
  function shim(...args) {
    return propType(...args);
  }

  if (level === 0) {
    level++; // eslint-disable-line no-plusplus
    // make sure to also shim `isRequired`, etc.
    Object.keys(propType)
      .map(key => {
        shim[key] = propType[key];

        return key;
      })
      .reduce(shimKeys, shim);
    level--; // eslint-disable-line no-plusplus
  }

  return shim;
}

function shimKeys(propTypes, key) {
  const propType = propTypes[key];

  if (typeof propType === "function") {
    propTypes[key] = getShim(propType);
  }

  return propTypes;
}

const ReactPropTypes = PropTypes;

Object.keys(ReactPropTypes).reduce(shimKeys, ReactPropTypes);

export default ReactPropTypes;
