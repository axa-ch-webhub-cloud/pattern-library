import React from 'react';

export interface AXACheckboxProps {
  refId?: string;
  value?: string;
  name?: string;
  label?: string;
  required?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  onChange?: (e: UIEvent) => void;
  onFocus?: (e?: FocusEvent) => void;
  onBlur?: (e?: FocusEvent) => void;
}

declare function createAXACheckbox(
  createElement: typeof React.createElement
): React.ComponentType<AXACheckboxProps>;

export default createAXACheckbox;
