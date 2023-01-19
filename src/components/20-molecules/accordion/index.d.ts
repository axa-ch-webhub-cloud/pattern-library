import React from 'react';

export interface AXAAccordionProps {
  className?: string;
  ariaLevel?: string;
  disabled?: boolean;
  open?: boolean;
  small?: boolean;
  title?: string;
  icon?: string;
  children?: React.ReactNode;
  onStateChange?: (isOpen: boolean) => void;
}

declare function createAXAAccordionReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAAccordionProps>;
