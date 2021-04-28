import React from 'react';

export interface AXAToggleSwitchProps {
  active?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  onChange?: (e: UIEvent) => void;
}

declare function createAXAToggleSwitch(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAToggleSwitchProps>;

export default createAXAToggleSwitch;
