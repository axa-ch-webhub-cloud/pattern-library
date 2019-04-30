import withReact from '../../../utils/with-react';
import AXATopContentBar from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXATopContentBar.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
