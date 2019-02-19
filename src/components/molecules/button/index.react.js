import { createElement } from 'react';
import val from '@skatejs/val';

const wrappedCreateElement = val(createElement);
const AXAButtonReact = ({ size, color, motion, onClick, children }) =>
  wrappedCreateElement(
    'axa-button',
    {
      size,
      color,
      motion,
      onClick,
    },
    children,
  );

export default AXAButtonReact;
