import withReact from '../../../utils/with-react';
import AXAContainer from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXAContainer.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
