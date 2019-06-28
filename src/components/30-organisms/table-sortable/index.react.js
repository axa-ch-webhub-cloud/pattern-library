import withReact from '../../../utils/with-react';
import AXATable from './index';

export default createElement => ({ children, model, innerscroll, maxheight }) =>
  withReact(createElement)(
    AXATable.tagName,
    { model, innerscroll, maxheight },
    children
  );
