import React from 'react';

export type AXAToggleSwitchChange = { target: { checked: boolean } };

export interface AXAToggleSwitchProps {
  active?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  onChange?: (event: AXAToggleSwitchChange) => void;
}

declare function createAXAToggleSwitch(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAToggleSwitchProps>;

export default createAXAToggleSwitch;
