import withReact from '../../../utils/with-react';
import AXATitleSecondary from './index';

export default createElement => ({
  variant = '',
  className = '',
  slot = '',
  children,
}) =>
  withReact(createElement)(
    AXATitleSecondary.tagName,
    {
      variant,
      className,
      slot,
    },
    children
  );
