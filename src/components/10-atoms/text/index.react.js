import withReact from '../../../utils/with-react';
import AXAText from './index';

export default createElement => ({ variant = '', children }) =>
  withReact(createElement)(
    AXAText.tagName,
    {
      variant,
    },
    children
  );
