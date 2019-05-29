import withReact from '../../../utils/with-react';
import AXATitleSection from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXATitleSection.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
