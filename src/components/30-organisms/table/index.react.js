import withReact from '../../../utils/with-react';
import AXATable from './';

export default createElement => ({ children }) =>
  withReact(createElement)(AXATable.tagName, null, children);
