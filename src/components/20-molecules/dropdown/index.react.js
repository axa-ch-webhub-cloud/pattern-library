import withReact from '../../../utils/with-react';
import AXADropdown from './index';

export default createElement => ({
  'data-test-id': dataTestId,
  title,
  open,
  items,
  value,
  native,
  valid,
  error,
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  style,
}) =>
  withReact(createElement)(AXADropdown.tagName, {
    'data-test-id': dataTestId,
    title,
    open,
    items,
    value,
    native,
    valid,
    error,
    onChange,
    onFocus,
    onBlur,
    isReact: true,
    style,
  });
