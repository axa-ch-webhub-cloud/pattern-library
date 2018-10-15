import PropTypes from 'prop-types';

export const tableScopePropType = PropTypes.oneOf([
  'row',
  'col',
  'rowgroup',
  'colgroup',
  'auto',
]);
