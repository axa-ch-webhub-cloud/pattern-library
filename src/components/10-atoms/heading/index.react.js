import withReact from '../../../utils/with-react';
import AXAHeading from './index';

export default createElement => ({
  /* props here, same as in the constructor of index.js */
  className = '',
  children,
}) =>
  withReact(createElement)(
    AXAHeading.tagName,
    {
      /* props here, same as in the constructor of index.js */
      className,
    },
    children
  );
