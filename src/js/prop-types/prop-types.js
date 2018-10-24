import PropTypes from 'prop-types';

function getShim(propType) {
  function shim(...args) {
    return propType(...args);
  }

  Object.keys(propType).forEach((key) => {
    shim[key] = propType[key];
  });

  return shim;
}

const ReactPropTypes = PropTypes;

Object.keys(ReactPropTypes).forEach((key) => {
  ReactPropTypes[key] = getShim(ReactPropTypes[key]);
});

export default ReactPropTypes;
