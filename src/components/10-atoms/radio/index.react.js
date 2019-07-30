import withReact from '../../../utils/with-react';
import AXARadio from './index';

export default createElement => ({
  value,
  name,
  label,
  checked,
  disabled,
  button,
  nogap,
  icon,
  error,
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  children,
}) =>
  withReact(createElement)(
    AXARadio.tagName,
    {
      value,
      name,
      label,
      checked,
      disabled,
      button,
      nogap,
      icon,
      error,
      onChange,
      onFocus,
      onBlur,
      isReact: true,
    },
    children
  );
