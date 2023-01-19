import React from 'react';

export interface AXACheckboxProps {
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
  onChange?: (event: Event) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

declare function createAXACheckboxReact(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXACheckboxProps>;
