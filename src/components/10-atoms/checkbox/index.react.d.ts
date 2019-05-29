import React from 'react';

interface AXACheckboxProps {
  value?: string;
  name?: string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: string;
  onChange?: (value: any) => void;
}

declare function createAXACheckbox(
  createElement: typeof React.createElement
): React.ComponentType<AXACheckboxProps>;

export = createAXACheckbox;
