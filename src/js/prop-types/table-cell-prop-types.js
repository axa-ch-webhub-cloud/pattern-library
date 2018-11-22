import PropTypes from './prop-types';

import valuePropType from './value-prop-type';
import tableScopePropType from './table-scope-prop-type';
import alignPropType from './align-prop-type';
import sortPropType from './sort-prop-type';
import floatPropType from './float-prop-type';
import statePropType from './state-prop-type';

// share across `<thead>`, `<tbody>` and `<tfoot>`
export const cellShape = {
  text: valuePropType,
  value: PropTypes.any,
  rowspan: PropTypes.number,
  colspan: PropTypes.number,
  scope: tableScopePropType,
  align: alignPropType,
  dense: PropTypes.bool,
};

// share across `<tbody>` and `<tfoot>`
export const cellDataShape = {
  float: floatPropType,
  strong: PropTypes.bool,
  bold: PropTypes.bool,
};

export const tableCellPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape(cellShape),
]);

export const cellHeadPropType = PropTypes.oneOfType([
  tableCellPropTypes,
  PropTypes.shape({
    ...cellShape,
    sort: sortPropType,
    sortActive: PropTypes.bool,
  }),
]);

export const cellBodyPropType = PropTypes.oneOfType([
  tableCellPropTypes,
  PropTypes.shape({
    ...cellShape,
    ...cellDataShape,
    action: PropTypes.bool,
    state: statePropType,
  }),
]);

export const cellFootPropType = PropTypes.oneOfType([
  tableCellPropTypes,
  PropTypes.shape({
    ...cellShape,
    ...cellDataShape,
  }),
]);

// @todo: fix missing default exports break the build
// https://github.com/axa-ch/patterns-library/issues/609
export default null;
