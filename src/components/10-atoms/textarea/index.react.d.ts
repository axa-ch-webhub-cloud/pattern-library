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
  isReact?: boolean;
  counter?: string;
  counterError?: string;
  maxLength?: number;
  className?: string;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

declare function createAXATextarea(createElement: typeof React.createElement, version?: string): React.ComponentType<AXATextareaProps>;

export default createAXATextarea;
