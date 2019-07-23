import withReact from '../../../utils/with-react';
import AXAPolicyFeatures from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXAPolicyFeatures.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
