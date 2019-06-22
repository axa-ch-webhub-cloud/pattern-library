import React from 'react';

interface AXATextareaProps {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
  valid?: boolean;
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
