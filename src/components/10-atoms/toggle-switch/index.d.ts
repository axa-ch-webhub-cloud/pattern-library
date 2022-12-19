import React from 'react';

export interface AXAToggleSwitchProps {
  checked?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  onToggle?: (checked: boolean) => void;
}

declare function createAXAToggleSwitchReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAToggleSwitchProps>;
