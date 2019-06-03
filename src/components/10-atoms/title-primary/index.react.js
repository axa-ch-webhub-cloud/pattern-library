import withReact from '../../../utils/with-react';
import AXATitlePrimary from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXATitlePrimary.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
