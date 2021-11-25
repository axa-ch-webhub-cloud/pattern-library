import React from 'react';

export type Variant = 'foo' | 'bar';

export interface AXAInputPhoneProps {
  className?: string;
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXAInputPhone(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAInputPhoneProps>;

export default createAXAInputPhone;