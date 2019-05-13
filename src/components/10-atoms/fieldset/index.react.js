import withReact from '../../../utils/with-react';
import AXAFieldset from './index';

export default createElement => ({ horizontal, children }) =>
  withReact(createElement)(
    AXAFieldset.tagName,
    {
      horizontal,
    },
    children
  );
