import withReact from '../../../utils/with-react';
import AXADropdown from './index';

export default createElement => ({
  'data-test-id': dataTestId,
  title,
  label,
  required,
  refId,
  items,
  value,
  native,
  valid,
  error,
  className,
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
}) =>
  withReact(createElement)(AXADropdown.tagName, {
    'data-test-id': dataTestId,
    label,
    required,
    refId,
    title,
    items,
    value,
    native,
    valid,
    error,
    onChange,
    onFocus,
    onBlur,
    className,
    isReact: true,
  });
