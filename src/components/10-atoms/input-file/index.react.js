import withReact from '../../../utils/with-react';
import AXAInputFile from './index';

export default createElement => ({
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
    AXAInputFile.tagName,
    {
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
