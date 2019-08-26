import withReact from '../../../utils/with-react';
import AXAIcon from './index';

export default createElement => ({ icon }) =>
  withReact(createElement)(AXAIcon.tagName, {
    icon,
  });
