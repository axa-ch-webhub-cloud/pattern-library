import withReact from '../../../utils/with-react';
import AXACommercialHeroBanner from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  className,
  children,
}) =>
  withReact(createElement)(
    AXACommercialHeroBanner.tagName,
    {
      /* props here, same as in the constructor of index.js */
      className,
    },
    children
  );
