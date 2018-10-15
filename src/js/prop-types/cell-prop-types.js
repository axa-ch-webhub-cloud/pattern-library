import PropTypes from 'prop-types';

import valuePropType from './value-prop-type';
import tablePropType from './table-prop-types';
import alignPropType from './align-prop-type';
import sortPropType from './sort-prop-type';
import floatPropType from './float-prop-type';
import statePropType from './state-prop-type';

export const cellShape = {
  text: valuePropType,
  value: PropTypes.any,
  rowspan: PropTypes.number,
  colspan: PropTypes.number,
  scope: tablePropType,
  align: alignPropType,
  dense: PropTypes.bool,
};

export const cellPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape(cellShape),
]);

export const cellHeadPropType = PropTypes.oneOfType([
  cellPropTypes,
  PropTypes.shape({
    ...cellShape,
    sort: sortPropType,
    sortActive: PropTypes.bool,
  }),
]);

export const cellBodyPropType = PropTypes.oneOfType([
  cellPropTypes,
  PropTypes.shape({
    ...cellShape,
    float: floatPropType,
    action: PropTypes.bool,
    strong: PropTypes.bool,
    bold: PropTypes.bool,
    state: statePropType,
  }),
]);

export const cellFootPropType = PropTypes.oneOfType([
  cellPropTypes,
  PropTypes.shape({
    ...cellShape,
    float: floatPropType,
  }),
]);

// @todo: fix missing default exports break the build
// https://github.com/axa-ch/patterns-library/issues/609
export default null;
