import withReact from '../../../utils/with-react';
import AXACheckbox from './index';

export default createElement => ({
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
