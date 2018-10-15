import PropTypes from 'prop-types';

import { cellHeadPropType, cellBodyPropType, cellFootPropType } from './cell-prop-types';

export const rowHeadPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(cellHeadPropType),
  PropTypes.shape({
    cells: PropTypes.arrayOf(cellHeadPropType),
  }),
]);

export const rowBodyPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(cellBodyPropType),
  PropTypes.shape({
    cells: PropTypes.arrayOf(cellBodyPropType),
    action: PropTypes.bool,
  }),
]);

export const rowFootPropType = PropTypes.oneOfType([
  PropTypes.arrayOf(cellFootPropType),
  PropTypes.shape({
    cells: PropTypes.arrayOf(cellFootPropType),
  }),
]);

// @todo: fix missing default exports break the build
// https://github.com/axa-ch/patterns-library/issues/609
export default null;
