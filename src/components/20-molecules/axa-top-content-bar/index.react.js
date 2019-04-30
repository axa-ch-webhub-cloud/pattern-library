import withReact from '../../../utils/with-react';
import AXAAxaTopContentBar from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXAAxaTopContentBar.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
