import PropTypes from './prop-types';

import { cellHeadPropType, cellBodyPropType, cellFootPropType } from './table-cell-prop-types';
import { rowHeadPropType, rowBodyPropType, rowFootPropType } from './table-row-prop-types';

export const tableHeadPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(cellHeadPropType),
  PropTypes.arrayOf(rowHeadPropType),
]);

export const tableBodyPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(cellBodyPropType),
  PropTypes.arrayOf(rowBodyPropType),
]);

export const tableFootPropTypes = PropTypes.oneOfType([
  PropTypes.arrayOf(cellFootPropType),
  PropTypes.arrayOf(rowFootPropType),
]);

// @todo: fix missing default exports break the build
// https://github.com/axa-ch/patterns-library/issues/609
export default null;
