import withReact from '../../../utils/with-react';
import AXACommercialHeroCover from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXACommercialHeroCover.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
