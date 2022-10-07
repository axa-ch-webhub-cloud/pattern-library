import React from 'react';

export type Variant = 'size-2' | 'size-3' | 'size-4';

export interface AXATextProps {
  variant?: Variant;
  tagless?: boolean;
  bold?: boolean;
  italic?: boolean;
  children?: React.ReactNode;
}

declare function createAXAText(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXATextProps>;

export default createAXAText;
