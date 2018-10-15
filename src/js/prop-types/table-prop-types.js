import PropTypes from 'prop-types';

import { cellHeadPropType, cellBodyPropType, cellFootPropType } from './cell-prop-types';
import { rowHeadPropType, rowBodyPropType, rowFootPropType } from './row-prop-types';

export const tableScopePropType = PropTypes.oneOf([
  'row',
  'col',
  'rowgroup',
  'colgroup',
  'auto',
]);

export const tableHeadPropTypes = PropTypes.oneOfType(
  PropTypes.arrayOf(cellHeadPropType),
  PropTypes.arrayOf(rowHeadPropType),
);

export const tableBodyPropTypes = PropTypes.oneOfType(
  PropTypes.arrayOf(cellBodyPropType),
  PropTypes.arrayOf(rowBodyPropType),
);

export const tableFootPropTypes = PropTypes.oneOfType(
  PropTypes.arrayOf(cellFootPropType),
  PropTypes.arrayOf(rowFootPropType),
);
