import withReact from '../../../utils/with-react';
import AXAFieldset from './index';

export default createElement => ({ horizontal, slot = '', children }) =>
  withReact(createElement)(
    AXAFieldset.tagName,
    {
      horizontal,
      slot,
    },
    children
  );
