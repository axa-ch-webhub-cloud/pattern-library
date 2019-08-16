import withReact from '../../../utils/with-react';
import AXACheckbox from './index';

export default createElement => ({
  value = '',
  name = '',
  label,
  checked,
  defaultChecked,
  disabled,
  required,
  error,
  className = '',
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  children,
}) =>
  withReact(createElement)(
    AXACheckbox.tagName,
    {
      value,
      name,
      label,
      checked,
      defaultChecked,
      disabled,
      required,
      error,
      className,
      onChange,
      onFocus,
      onBlur,
      isReact: true,
    },
    children
  );
