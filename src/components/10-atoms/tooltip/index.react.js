import withReact from '../../../utils/with-react';
import AXATooltip from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXATooltip.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
