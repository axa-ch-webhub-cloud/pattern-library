import withReact from '../../../utils/with-react';
import AXATitleSecondary from './index';

export default createElement => ({ variant, children }) =>
  withReact(createElement)(
    AXATitleSecondary.tagName,
    {
      variant,
    },
    children
  );
