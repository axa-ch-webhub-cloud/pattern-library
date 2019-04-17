import withReact from '../../../utils/with-react';
import AXAButton from './index';

export default createElement => ({
  type = 'button',
  icon = '',
  secondary = false,
  large = false,
  inverted = false,
  red = false,
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
      secondary,
      large,
      inverted,
      red,
      motionOff,
      disabled,
      onClick,
    },
    children
  );
