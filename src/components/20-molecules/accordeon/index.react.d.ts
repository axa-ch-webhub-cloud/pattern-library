import React from 'react';

export interface AXAAccordeonProps {
  className?: string;
  disabled?: boolean;
  open?: boolean;
  small?: boolean;
  title?: string;
  icon?: string;
}

declare function createAXAAccordeon(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAAccordeonProps>;

export default createAXAAccordeon;
