import React from 'react';

export interface AXAInputTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  refId?: string;
  name: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  currency?: string;
  defaultValue?: string;
  error?: string;
  type?: string;
  info?: string;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  checkMark?: boolean;
  maxLength?: number;
  counter?: string;
  counterMax?: string;
  isReact?: boolean;
  className?: string;
  pattern?: string;
  inputmode?: string;
  autofocus?: boolean;
  readonly?: boolean;
  onFocus?: (e?: FocusEvent) => void;
  onBlur?: (e?: FocusEvent) => void;
  onChange?: (e: { target: HTMLInputElement }, invalidFormat: Boolean) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

declare function createAXAInputText(
  createElement: typeof React.createElement,
  version?: string
): React.ComponentType<AXAInputTextProps>;

export default createAXAInputText;
