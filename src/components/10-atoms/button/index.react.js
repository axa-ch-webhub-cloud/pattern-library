import withReact from '../../../utils/with-react';
import AXAButton from './index';
import '@axa-ch/link/lib/index.react';

export default createElement => ({
  type = 'button',
  icon = '',
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
      variant,
      motionOff,
      disabled,
      onClick,
    },
    children
  );
