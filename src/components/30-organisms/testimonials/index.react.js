import withReact from '../../../utils/with-react';
import AXATestimonials from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  children,
}) =>
  withReact(createElement)(
    AXATestimonials.tagName,
    {
      /* props here, same as in the constructor of index.js */
    },
    children
  );
