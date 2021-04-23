import React from 'react';
import { Icon, Size } from './index.d';

export interface AXAIconProps {
  icon?: Icon;
  size?: Size;
}

declare function createAXAIcon(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAIconProps>;

export default createAXAIcon;
