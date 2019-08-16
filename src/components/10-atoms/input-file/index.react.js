import withReact from '../../../utils/with-react';
import AXAInputFile from './index';

export default createElement => ({
  icon = '',
  id = '',
  variant = '',
  motionOff = false,
  disabled = false,
  onChange,
  children,
  accept = 'image/jpg, image/jpeg, application/pdf, image/png',
  capture = false,
  multiple = false,
  className = '',
  slot = '',
}) =>
  withReact(createElement)(
    AXAInputFile.tagName,
    {
      icon,
      id,
      variant,
      motionOff,
      disabled,
      onChange,
      accept,
      capture,
      multiple,
      className,
      slot,
    },
    children
  );
