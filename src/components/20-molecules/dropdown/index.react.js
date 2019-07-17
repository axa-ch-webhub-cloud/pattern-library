import withReact from '../../../utils/with-react';
import AXADropdown from './index';

export default createElement => ({
  'data-test-id': dataTestId,
  title,
  items,
  value,
  native,
  valid,
  error,
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
}) =>
  withReact(createElement)(AXADropdown.tagName, {
    'data-test-id': dataTestId,
    title,
    items,
    value,
    native,
    valid,
    error,
    onChange,
    onFocus,
    onBlur,
    isReact: true,
  });
