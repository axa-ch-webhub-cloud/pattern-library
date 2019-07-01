import React from 'react';

interface AXATextareaProps {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  defaultValue?: string;
  value?: string;
  invalid?: boolean;
  validation?: boolean;
  required?: boolean;
  disabled?: boolean;
  isReact?: boolean;
  counter?: string;
  counterError?: string;
  maxLength?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: () => void;
}

declare function createAXATextarea(
  createElement: typeof React.createElement
): React.ComponentType<AXATextareaProps>;

export = createAXATextarea;
