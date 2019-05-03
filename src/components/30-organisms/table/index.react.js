import withReact from '../../../utils/with-react';
import AXATable from './';

export default createElement => ({ children, innerscroll }) =>
  withReact(createElement)(AXATable.tagName, { innerscroll }, children);
