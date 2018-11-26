import PropTypes from './prop-types';

import { tableCellHeadPropType, tableCellBodyPropType, tableCellFootPropType } from './table-cell-prop-types';

export const tableRowHeadPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(tableCellHeadPropType),
  PropTypes.shape({
    cells: PropTypes.arrayOf(tableCellHeadPropType),
  }),
]);

export const tableRowBodyPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(tableCellBodyPropType),
  PropTypes.shape({
    cells: PropTypes.arrayOf(tableCellBodyPropType),
    action: PropTypes.bool,
  }),
]);

export const tableRowFootPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(tableCellFootPropType),
  PropTypes.shape({
    cells: PropTypes.arrayOf(tableCellFootPropType),
  }),
]);

// @todo: fix missing default exports break the build
// https://github.com/axa-ch/patterns-library/issues/609
export default null;
