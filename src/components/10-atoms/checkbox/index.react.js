import withReact from '../../../utils/with-react';
import AXACheckbox from './index';
import createRefId from '../../../utils/create-ref-id';

export default createElement => ({
  refId = `checkbox-${createRefId()}`,
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
      refId,
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
