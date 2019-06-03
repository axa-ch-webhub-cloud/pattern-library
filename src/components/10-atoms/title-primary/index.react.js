import withReact from '../../../utils/with-react';
import AXATitlePrimary from './index';

export default createElement => ({ variant, children }) =>
  withReact(createElement)(
    AXATitlePrimary.tagName,
    {
      variant,
    },
    children
  );
