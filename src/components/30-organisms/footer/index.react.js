import withReact from '../../../utils/with-react';
import AXAFooter from './index';

export default createElement => ({ dynamic = false }) =>
  withReact(createElement)(AXAFooter.tagName, {
    dynamic,
  });
