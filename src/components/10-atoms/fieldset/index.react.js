import withReact from '../../../utils/with-react';
import AXAFieldset from './index';

export default createElement => ({ horizontal, error, slot = '', children }) =>
  withReact(createElement)(
    AXAFieldset.tagName,
    {
      horizontal,
      error,
      slot,
    },
    children
  );

