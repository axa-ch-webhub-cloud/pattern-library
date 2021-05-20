import React from 'react';

export type Variant = 'foo' | 'bar';

export interface AXAAccordeonProps {
  className?: string;
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXAAccordeon(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAAccordeonProps>;

export default createAXAAccordeon;
