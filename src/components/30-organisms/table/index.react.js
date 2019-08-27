import withReact from '../../../utils/with-react';
import AXATable from './index';

export default createElement => ({
  children,
  innerscroll,
  maxheight,
  className = '',
}) =>
  withReact(createElement)(
    AXATable.tagName,
    { innerscroll, maxheight, className },
    children
  );
