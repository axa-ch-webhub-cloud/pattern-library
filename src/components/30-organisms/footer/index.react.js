import withReact from '../../../utils/with-react';
import AXAFooter from './index';

export default createElement => ({
  content = [],
  social = {},
  dynamic = false,
}) =>
  withReact(createElement)(AXAFooter.tagName, {
    content,
    social,
    dynamic,
  });
