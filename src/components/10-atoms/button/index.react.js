import withReact from '../../../utils/with-react';
import AXAButton from './index';

export default createElement => ({
  type = 'button',
  icon = '',
  variant = '',
  motionOff = false,
  disabled = false,
  onClick,
  children,
  accept = 'image/jpg, image/jpeg, application/pdf, image/png',
  capture = false,
  multiple = true,
}) =>
  withReact(createElement)(
    AXAButton.tagName,
    {
      type,
      icon,
      variant,
      motionOff,
      disabled,
      onClick,
      accept,
      capture,
      multiple,
    },
    children
  );
