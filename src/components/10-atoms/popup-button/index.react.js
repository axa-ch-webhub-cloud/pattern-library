import withReact from '../../../utils/with-react';
import AXAPopupButton from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXAPopupButton.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
