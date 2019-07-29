import withReact from '../../../utils/with-react';
import AXAPopup from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXAPopup.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
