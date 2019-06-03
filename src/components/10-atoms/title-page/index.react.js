import withReact from '../../../utils/with-react';
import AXATitlePage from './index';

export default createElement => ({ children }) =>
  withReact(createElement)(AXATitlePage.tagName, {}, children);
