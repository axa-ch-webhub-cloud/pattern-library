import withReact from '../../../utils/with-react';
import AXAText from './index';

export default createElement => ({ variant = '', className, children }) =>
  withReact(createElement)(
    AXAText.tagName,
    {
      className,
      variant,
    },
    children
  );
