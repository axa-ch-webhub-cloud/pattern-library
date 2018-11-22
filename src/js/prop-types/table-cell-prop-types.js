import PropTypes from './prop-types';

import valuePropType from './value-prop-type';
import tableScopePropType from './table-scope-prop-type';
import alignPropType from './align-prop-type';
import sortPropType from './sort-prop-type';
import floatPropType from './float-prop-type';
import statePropType from './state-prop-type';

// share across `<thead>`, `<tbody>` and `<tfoot>`
export const tableCellShape = {
  text: valuePropType,
  value: PropTypes.any,
  rowspan: PropTypes.number,
  colspan: PropTypes.number,
  scope: tableScopePropType,
  align: alignPropType,
  dense: PropTypes.bool,
};

// share across `<tbody>` and `<tfoot>`
export const tableCellDataShape = {
  float: floatPropType,
  strong: PropTypes.bool,
  bold: PropTypes.bool,
};

export const tableCellPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape(tableCellShape),
]);

export const tableCellHeadPropType = PropTypes.oneOfType([
  tableCellPropTypes,
  PropTypes.shape({
    ...tableCellShape,
    sort: sortPropType,
    sortActive: PropTypes.bool,
  }),
]);

export const tableCellBodyPropType = PropTypes.oneOfType([
  tableCellPropTypes,
  PropTypes.shape({
    ...tableCellShape,
    ...tableCellDataShape,
    action: PropTypes.bool,
    state: statePropType,
  }),
]);

export const tableCellFootPropType = PropTypes.oneOfType([
  tableCellPropTypes,
  PropTypes.shape({
    ...tableCellShape,
    ...tableCellDataShape,
  }),
]);

// @todo: fix missing default exports break the build
// https://github.com/axa-ch/patterns-library/issues/609
export default null;
