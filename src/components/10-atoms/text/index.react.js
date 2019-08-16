import withReact from '../../../utils/with-react';
import AXAText from './index';

export default createElement => ({
  variant = '',
  className = '',
  slot = '',
  children,
}) =>
  withReact(createElement)(
    AXAText.tagName,
    {
      className,
      slot,
      variant,
    },
    children
  );
