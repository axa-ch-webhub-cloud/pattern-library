import React from 'react';

export type Variant = 'foo' | 'bar';

export interface AXAToggleSwitchProps {
  className?: string;
  variant?: Variant;
  onClick?: () => void;
}

declare function createAXAToggleSwitch(
  createElement: typeof React.createElement
): React.ComponentType<AXAToggleSwitchProps>;

export default createAXAToggleSwitch;