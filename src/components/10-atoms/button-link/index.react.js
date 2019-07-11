import withReact from '../../../utils/with-react';
import AXAButtonLink from './index';

export default createElement => ({
  icon = '',
  variant = '',
  href = '',
  size = '',
  external = false,
  motionOff = false,
  disabled = false,
  onClick,
  children,
}) =>
  withReact(createElement)(
    AXAButtonLink.tagName,
    {
      icon,
      variant,
      href,
      size,
      external,
      motionOff,
      disabled,
      onClick,
    },
    children
  );
