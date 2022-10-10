import React from 'react';

export type AXATextSizes = 1 | 2 | 3 | 4;

export interface AXATextProps {
  size?: AXATextSizes;
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
