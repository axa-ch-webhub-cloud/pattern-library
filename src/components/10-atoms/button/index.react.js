import withReact from '../../../utils/with-react';
import AXAButton from './index';

export default createElement => ({
  type = 'button',
  icon = '',
  size = '',
  variant = '',
  motionOff = false,
  disabled = false,
  onClick,
  children,
}) =>
  withReact(createElement)(
    AXAButton.tagName,
    {
      type,
      icon,
      size,
      variant,
      motionOff,
      disabled,
      onClick,
    },
    children
  );
