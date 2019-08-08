import withReact from '../../../utils/with-react';
import AXACarousel from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  className,
  children,
}) =>
  withReact(createElement)(
    AXACarousel.tagName,
    {
      /* props here, same as in the constructor of index.js */
      className,
    },
    children
  );
