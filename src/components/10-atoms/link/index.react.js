import withReact from '../../../utils/with-react';
import AXALink from './index';
import '@axa-ch/icon/lib/index.react';

export default createElement => ({
  href = '',
  variant = '',
  icon = '',
  external = false,
  children,
}) =>
  withReact(createElement)(
    AXALink.tagName,
    {
      href,
      variant,
      icon,
      external,
    },
    children
  );
