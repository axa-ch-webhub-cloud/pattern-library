import withReact from '../../../utils/with-react';
import AXATitleSecondary from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXATitleSecondary.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
