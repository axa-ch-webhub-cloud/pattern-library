import withReact from '../../../utils/with-react';
import AXADatepicker from './index';

export default createElement => props =>
  withReact(createElement)(AXADatepicker.tagName, {
    ...props,
  });
