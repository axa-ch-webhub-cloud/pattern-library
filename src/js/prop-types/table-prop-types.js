import PropTypes from './prop-types';

import { tableRowHeadPropType, tableRowBodyPropType, tableRowFootPropType } from './table-row-prop-types';

export const tableHeadPropTypes = PropTypes.oneOfType([tableRowHeadPropType, PropTypes.arrayOf(tableRowHeadPropType)]);

export const tableBodyPropTypes = PropTypes.oneOfType([tableRowBodyPropType, PropTypes.arrayOf(tableRowBodyPropType)]);

export const tableFootPropTypes = PropTypes.oneOfType([tableRowFootPropType, PropTypes.arrayOf(tableRowFootPropType)]);

// @todo: fix missing default exports break the build
// https://github.com/axa-ch/patterns-library/issues/609
export default null;
