import React from 'react';

export type Variant = 'foo' | 'bar';

export interface AXAPopupProps {
  variant?: Variant;
  slot?: string;
  children?: string;
  onClick?: (event: MouseEvent) => void;
}

declare function createAXAPopup(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAPopupProps>;

export default createAXAPopup;
