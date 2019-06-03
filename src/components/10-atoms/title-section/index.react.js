import withReact from '../../../utils/with-react';
import AXATitleSection from './index';

export default createElement => ({ variant = '', children }) =>
  withReact(createElement)(
    AXATitleSection.tagName,
    {
      variant,
    },
    children
  );
