import PropTypes from 'prop-types';

import valuePropType from './value-prop-type';
import tableScopePropType from './table-scope-prop-type';
import alignPropType from './align-prop-type';
import sortPropType from './sort-prop-type';
import floatPropType from './float-prop-type';
import statePropType from './state-prop-type';

export const cellShape = {
  text: valuePropType,
  value: PropTypes.any,
  rowspan: PropTypes.number,
  colspan: PropTypes.number,
  scope: tableScopePropType,
  align: alignPropType,
};

export const cellPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape(cellShape),
]);

export const cellHeaderPropType = PropTypes.oneOfType([
  cellPropTypes,
  PropTypes.shape({
    ...cellShape,
    sort: sortPropType,
    sortActive: PropTypes.boolean,
  }),
]);

export const cellDataPropType = PropTypes.oneOfType([
  cellPropTypes,
  PropTypes.shape({
    ...cellShape,
    float: floatPropType,
    action: PropTypes.boolean,
    strong: PropTypes.boolean,
    bold: PropTypes.boolean,
    state: statePropType,
  }),
]);

export const cellFooterPropType = PropTypes.oneOfType([
  cellPropTypes,
  PropTypes.shape({
    ...cellShape,
    float: floatPropType,
  }),
]);
