import withReact from '../../../utils/with-react';
import AXAIcon from './index';

export default createElement => ({ icon, size = '' }) =>
  withReact(createElement)(AXAIcon.tagName, {
    icon,
    size,
  });
