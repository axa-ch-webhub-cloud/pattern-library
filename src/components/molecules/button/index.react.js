import withReact from '../../../utils/with-react';
import AXAButton from './index';

export default createElement => ({ size, color, motion, onClick, children }) =>
  withReact(createElement)(
    AXAButton.tagName,
    {
      size,
      color,
      motion,
      onClick,
    },
    children,
  );

