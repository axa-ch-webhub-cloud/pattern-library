import withReact from '../../../utils/with-react';
import AXADropdown from './index';

export default createElement => ({
  'data-test-id': dataTestId,
  title,
  open,
  items,
}) =>
  withReact(createElement)(AXADropdown.tagName, {
    'data-test-id': dataTestId,
    title,
    open,
    items,
  });
