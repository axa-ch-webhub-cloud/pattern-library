import PropTypes from './prop-types';

import { rowHeadPropType, rowBodyPropType, rowFootPropType } from './table-row-prop-types';

export const tableHeadPropTypes = PropTypes.oneOfType([
  rowHeadPropType,
  PropTypes.arrayOf(rowHeadPropType),
]);

export const tableBodyPropTypes = PropTypes.oneOfType([
  rowBodyPropType,
  PropTypes.arrayOf(rowBodyPropType),
]);

export const tableFootPropTypes = PropTypes.oneOfType([
  rowFootPropType,
  PropTypes.arrayOf(rowFootPropType),
]);

// @todo: fix missing default exports break the build
// https://github.com/axa-ch/patterns-library/issues/609
export default null;
