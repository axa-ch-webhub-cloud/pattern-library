import withReact from '../../../utils/with-react';
import AXAButton from './index';

export default createElement => ({ type, icon, secondary, large, inverted, cta, motionOff, disabled, onClick, children }) =>
  withReact(createElement)(
    AXAButton.tagName,
    {
      type,
      icon,
      secondary,
      large,
      inverted,
      cta,
      motionOff,
      disabled,
      onClick,
    },
    children,
  );
