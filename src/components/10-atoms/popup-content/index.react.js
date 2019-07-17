import withReact from '../../../utils/with-react';
import AXAPopupContent from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXAPopupContent.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
