import PropTypes from 'prop-types';

const tableScopePropType = PropTypes.oneOf([
  'row',
  'col',
  'rowgroup',
  'colgroup',
  'auto',
]);

export default tableScopePropType;
