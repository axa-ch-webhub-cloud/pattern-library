import React from 'react';
import { Icon } from './index.d';

interface AXAIconProps {
  icon?: Icon
}

declare function createAXAIcon(
  createElement: typeof React.createElement
): React.ComponentType<AXAIconProps>;

export = createAXAIcon;
