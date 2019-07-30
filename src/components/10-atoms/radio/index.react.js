import withReact from '../../../utils/with-react';
import AXARadio from './index';

export default createElement => ({
  id,
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
      id,
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
