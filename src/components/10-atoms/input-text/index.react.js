import withReact from '../../../utils/with-react';
import AXAInputText from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXAInputText.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
