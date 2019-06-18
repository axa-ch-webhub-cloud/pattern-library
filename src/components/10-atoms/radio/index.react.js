import withReact from '../../../utils/with-react';
import AXARadio from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXARadio.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
