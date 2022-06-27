import React from 'react';

export interface AXAAccordionProps {
  className?: string;
  disabled?: boolean;
  open?: boolean;
  small?: boolean;
  title?: string;
  icon?: string;
  children?: React.ReactNode;
}

declare function createAXAAccordion(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAAccordionProps>;

export default createAXAAccordion;
