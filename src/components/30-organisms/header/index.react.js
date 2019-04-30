import withReact from '../../../utils/with-react';
import AXAHeader from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXAHeader.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
