import React from 'react';

export interface AXACheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  refId?: string;
  value?: string;
  name?: string;
  label?: string;
  variant?: 'square' | 'checkmark' | 'checkmark-inverted';
  required?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  styled?: boolean;
  onChange?: (e: UIEvent) => void;
  onFocus?: (e?: FocusEvent) => void;
  onBlur?: (e?: FocusEvent) => void;
}

declare function createAXACheckbox(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXACheckboxProps>;

export default createAXACheckbox;
