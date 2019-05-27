import withReact from '../../../utils/with-react';
import AXALink from './index';

export default createElement => ({
  href = '',
  variant = '',
  icon = '',
  external = false,
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
    },
    children
  );
