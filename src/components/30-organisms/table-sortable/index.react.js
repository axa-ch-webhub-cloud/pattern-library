import withReact from '../../../utils/with-react';
import AXATable from './';

export default createElement => ({ children, model, innerscroll }) =>
  withReact(createElement)(AXATable.tagName, { model, innerscroll }, children);
