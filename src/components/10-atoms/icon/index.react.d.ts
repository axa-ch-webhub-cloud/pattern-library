import React from 'react';
import { Icon } from './index.d';

export interface AXAIconProps {
  icon?: Icon;
  size?: String;
}

declare function createAXAIcon(
  createElement: typeof React.createElement,
  version: string
): React.ComponentType<AXAIconProps>;

export default createAXAIcon;
