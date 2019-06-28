import withReact from '../../../utils/with-react';
import AXATable from './index';

export default createElement => ({ children, innerscroll, maxheight }) =>
  withReact(createElement)(
    AXATable.tagName,
    { innerscroll, maxheight },
    children
  );
