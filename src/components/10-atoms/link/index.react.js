import withReact from '../../../utils/with-react';
import AXALink from './index';

export default createElement => ({
  href = '',
  variant = '',
  icon = '',
  external = false,
  className,
  onClick,
  children,
}) =>
  withReact(createElement)(
    AXALink.tagName,
    {
      href,
      variant,
      onClick,
      icon,
      external,
      className,
    },
    children
  );
