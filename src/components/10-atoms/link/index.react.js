import withReact from '../../../utils/with-react';
import AXALink from './index';

export default createElement => ({
  href = '',
  variant = '',
  icon = '',
  external = false,
}) =>
  withReact(createElement)(AXALink.tagName, {
    href,
    variant,
    icon,
    external,
  });
