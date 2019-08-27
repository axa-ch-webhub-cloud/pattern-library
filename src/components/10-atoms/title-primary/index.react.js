import withReact from '../../../utils/with-react';
import AXATitlePrimary from './index';

export default createElement => ({
  variant = '',
  className = '',
  slot = '',
  children,
}) =>
  withReact(createElement)(
    AXATitlePrimary.tagName,
    {
      variant,
      className,
      slot,
    },
    children
  );
