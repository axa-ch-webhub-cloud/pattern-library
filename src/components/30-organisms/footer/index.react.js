import withReact from '../../../utils/with-react';
import AXAFooter from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXAFooter.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
