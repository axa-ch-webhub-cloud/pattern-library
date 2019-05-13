import withReact from '../../../utils/with-react';
import AXACheckbox from './index';

export default createElement => ({
  type,
  value,
  name,
  label,
  checked,
  disabled,
  error,
  onChange,
  children,
}) =>
  withReact(createElement)(
    AXACheckbox.tagName,
    {
      type,
      value,
      name,
      label,
      checked,
      disabled,
      error,
      onChange,
      isReact: true,
    },
    children
  );
