import withReact from '../../../utils/with-react';
import AXAImageUpload from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXAImageUpload.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
