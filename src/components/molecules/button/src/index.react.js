import { AXAButton } from './index';

export default wrappedCreateElement => ({ size, color, motion, onClick, children }) =>
  wrappedCreateElement(
    AXAButton.tagName,
    {
      size,
      color,
      motion,
      onClick,
    },
    children,
  );

