import React from 'react';

export interface AXATextareaProps {
  refId?: string;
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  defaultValue?: string;
  value?: string;
  invalid?: boolean;
  checkMark?: boolean;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  isReact?: boolean;
  counter?: string;
  counterError?: string;
  maxLength?: number;
  className?: string;
  children?: React.ReactNode;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
  onChange?: (event: InputEvent) => void;
}

declare function createAXATextarea(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXATextareaProps>;

export default createAXATextarea;
