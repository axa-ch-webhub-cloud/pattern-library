import PropTypes from 'prop-types';

// @todo remove as soon as https://github.com/facebook/prop-types/issues/231 is resolved
function getShim(propType) {
  function shim(...args) {
    return propType(...args);
  }

  // make sure to also shim `isRequired`, etc.
  Object.keys(propType).forEach((key) => {
    shim[key] = getShim(propType[key]);
  });

  return shim;
}

const ReactPropTypes = PropTypes;

Object.keys(ReactPropTypes).forEach((key) => {
  ReactPropTypes[key] = getShim(ReactPropTypes[key]);
});

export default ReactPropTypes;
